import { Component } from '@angular/core';


@Component({
  selector: 'app-encryption-form',
  templateUrl: './encryption-form.component.html',
  styleUrls: ['./encryption-form.component.css']
})
export class EncryptionFormComponent {
  nombre: string = ''; 
  isListening: boolean = false; 

  private recognition: any = null;


  constructor() {
    if ('webkitSpeechRecognition' in window) {
      this.recognition = new (window as any).webkitSpeechRecognition();
      this.recognition.continuous = true; 
      this.recognition.interimResults = true; 

      this.recognition.onresult = (event: any) => {
        const transcript = event.results[event.resultIndex][0].transcript;
        this.nombre = transcript; 
      };


      this.recognition.onstart = () => {
        this.isListening = true; 
      };

 
      this.recognition.onend = () => {
        this.isListening = false; 
      };
    }
  }

  startListening(): void {
    if (this.recognition) {
      if (this.isListening) {
        this.recognition.stop(); 
      } else {
        this.recognition.start(); 
      }
    }
  }
}
