import { Component } from '@angular/core';
import { Router } from '@angular/router';
import emailjs from '@emailjs/browser'; // Importar emailjs
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

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
      // Usar SweetAlert para mostrar el mensaje de error
      Swal.fire({
        text: 'Por favor, completa todos los campos requeridos antes de enviar el mensaje.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
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
          console.log('Mensaje enviado con éxito:', response.status, response.text);
          // Usar SweetAlert para mostrar el mensaje de éxito
          Swal.fire({
            text: 'Tu mensaje ha sido enviado correctamente.',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#3085d6',
          });
          this.onSubmit();
        },
        (error) => {
          console.error('Error al enviar el mensaje:', error);
          // Usar SweetAlert para mostrar el mensaje de error
          Swal.fire({
            title: 'Error al enviar el mensaje',
            text: 'Hubo un error al enviar el mensaje. Inténtalo nuevamente.',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#A3C4D6'
          });
        }
      );
  }

  onSubmit() {
    this.router.navigate(['/home']);
  }
}
