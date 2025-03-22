import { Component } from '@angular/core';
import { EncryptionService } from '../../Services/encryption.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-encryption-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './encryption-form.component.html',
  styleUrls: ['./encryption-form.component.css']
})
export class EncryptionFormComponent {
  nombre: string = '';
  isListening = false;

  constructor(private speechService: EncryptionService) {}

  startListening() {
    this.isListening = true;
    this.speechService.record('es-ES').subscribe({
      next: (text: string) => {
        this.nombre = text; // Actualiza el input con el texto filtrado y limitado
      },
      error: (err) => {
        console.error('Error de reconocimiento de voz:', err);
        this.isListening = false;
      },
      complete: () => {
        this.isListening = false;
      }
    });
  }
}
