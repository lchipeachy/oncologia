import { Component } from '@angular/core';
import { Router } from '@angular/router';
import emailjs from '@emailjs/browser'; // Importar emailjs

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  enviarFormulario(form: any) {
    // Validar que todos los campos requeridos tengan valores
    if (
      !form.value.nombres?.trim() ||
      !form.value.telefono?.trim() ||
      !form.value.email?.trim() ||
      !form.value.direccion?.trim() ||
      !form.value.mensaje?.trim()
    ) {
      alert(
        'Por favor, completa todos los campos requeridos antes de enviar el correo.'
      );
      return; // Detener el envío si hay campos vacíos
    }

    // Define los datos del formulario
    const templateParams = {
      nombres: form.value.nombres,
      telefono: form.value.telefono,
      email: form.value.email,
      direccion: form.value.direccion,
      mensaje: form.value.mensaje,
    };

    // Enviar correo con EmailJS
    emailjs
      .send(
        'service_s8fcqjj', // Reemplaza con tu Service ID
        'template_tmyulpr', // Reemplaza con tu Template ID
        templateParams,
        'CMWTH4Y0D5vdGksWw' // Reemplaza con tu Public Key
      )
      .then(
        (response) => {
          console.log(
            'Correo enviado con éxito:',
            response.status,
            response.text
          );
          alert('Correo enviado correctamente.');

          // Recargar la página completamente para resetear el formulario
          window.location.reload();
        },
        (error) => {
          console.error('Error al enviar el correo:', error);
          alert('Hubo un error al enviar el correo. Inténtalo nuevamente.');
        }
      );
  }
}
