import { Component } from '@angular/core';
import { Router } from '@angular/router';
import emailjs from '@emailjs/browser'; // Importar emailjs
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  // Define el formulario
  form: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    // Inicializa el formulario con validaciones
    this.form = this.fb.group({
      nombres: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      direccion: ['', Validators.required],
      mensaje: ['', Validators.required],
    });
  }

  enviarFormulario(contactForm: NgForm) {
    // Verificar si el formulario es inválido
    if (contactForm.invalid) {
      alert('Por favor, completa todos los campos requeridos antes de enviar el correo.');
      return;
    }
  
    // Define los datos del formulario
    const templateParams = {
      nombres: contactForm.value.nombres,
      telefono: contactForm.value.telefono,
      email: contactForm.value.email,
      direccion: contactForm.value.direccion,
      mensaje: contactForm.value.mensaje,
    };
  
    emailjs
      .send(
        'service_s8fcqjj',
        'template_tmyulpr',
        templateParams,
        'CMWTH4Y0D5vdGksWw'
      )
      .then(
        (response) => {
          console.log('Correo enviado con éxito:', response.status, response.text);
          alert('Correo enviado correctamente.');
          this.onSubmit();
        },
        (error) => {
          console.error('Error al enviar el correo:', error);
          alert('Hubo un error al enviar el correo. Inténtalo nuevamente.');
        }
      );
  }
  
  

  onSubmit() {
    this.router.navigate(['/home']);
  }
}
