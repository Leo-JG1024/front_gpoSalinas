import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

interface IWindow extends Window {
  webkitSpeechRecognition: any;
}

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {
  private apiUrl = environment.apiUrl;

  constructor(private zone: NgZone, private http: HttpClient) { }

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

    // Método para encriptar el texto a través de la API
    encryptText(text: string): Observable<any> {
      return this.http.post<any>(this.apiUrl, { text }); // Enviar texto a la API para encriptarlo
    }
}
