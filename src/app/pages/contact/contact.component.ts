import { Component } from '@angular/core';
import { Router } from '@angular/router';
import emailjs from '@emailjs/browser'; // Importar emailjs

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private router: Router) {}

  enviarFormulario(form: any) {
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
      console.log('Correo enviado con éxito:', response.status, response.text);
      alert('Correo enviado correctamente.');
      this.onSubmit(); // Redirige a Home después de enviar el correo
    },
    (error) => {
      console.error('Error al enviar el correo:', error);
      alert('Hubo un error al enviar el correo. Inténtalo nuevamente.');
    }
  );

  }

  // Método para redirigir a la página de inicio
  onSubmit() {
    this.router.navigate(['/home']);  // Redirige a Home
  }
}
