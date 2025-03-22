import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';

interface IWindow extends Window {
  webkitSpeechRecognition: any;
}

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  constructor(private zone: NgZone) { }

  record(language: string): Observable<string> {
    return new Observable(observer => {
      const { webkitSpeechRecognition }: IWindow = window as unknown as IWindow;
      const recognition = new webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = language;

      recognition.onresult = (event: any) => {
        this.zone.run(() => {
          let transcript = event.results[event.results.length - 1][0].transcript;
          
          //Eliminar caracteres no alfanuméricos (excepto espacios)
          transcript = transcript.replace(/[^a-zA-Z0-9 ]/g, '');
          
          //Limitar a 15 caracteres
          transcript = transcript.substring(0, 15);

          observer.next(transcript);
        });
      };

      recognition.onerror = (e: any) => observer.error(e);
      recognition.onend = () => observer.complete();

      recognition.start();
    });
  }
}
