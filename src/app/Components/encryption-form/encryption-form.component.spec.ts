import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EncryptionFormComponent } from './encryption-form.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('EncryptionFormComponent', () => {
  let component: EncryptionFormComponent;
  let fixture: ComponentFixture<EncryptionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule,EncryptionFormComponent] // Asegúrate de importar los módulos necesarios
    }).compileComponents();

    fixture = TestBed.createComponent(EncryptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Prueba 1: Verificar que el componente se crea correctamente
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // Prueba 2: Verificar que el valor del input se actualiza cuando cambia 'nombre'
  it('should update the input value when nombre changes', () => {
    component.nombre = 'Test User';
    fixture.detectChanges();
    
    const input = fixture.nativeElement.querySelector('input');
    expect(input.value).toBe('Test User');
  });

  // Prueba 3: Verificar que se aplica la clase 'text-danger' cuando 'nombre' tiene 15 caracteres
  it('should apply correct class when nombre length is 15', () => {
    component.nombre = '123456789012345'; // 15 caracteres
    fixture.detectChanges();
    
    const input = fixture.nativeElement.querySelector('input');
    expect(input.classList).toContain('text-danger');
  });

  // Prueba 4: Verificar que no se aplica 'text-danger' cuando 'nombre' tiene menos de 15 caracteres
  it('should apply correct class when nombre length is less than 15', () => {
    component.nombre = 'User Test'; // Menos de 15 caracteres
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('input');
    expect(input.classList).not.toContain('text-danger');
  });

  // Prueba 5: Verificar que al hacer clic en el botón, se llama a startListening
  it('should call startListening when button is clicked', () => {
    spyOn(component, 'startListening'); // Espiar la función

    const button = fixture.nativeElement.querySelector('button');
    button.click();
    
    expect(component.startListening).toHaveBeenCalled();
  });
});
