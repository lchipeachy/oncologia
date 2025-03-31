import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    { icon: 'medical_services', title: 'Consulta Oncológica', description: 'Evaluación y diagnóstico especializado en oncología.' },
    { icon: 'search', title: 'Detección Temprana', description: 'Pruebas y estudios preventivos para la detección temprana del cáncer.' },
    { icon: 'medication', title: 'Tratamientos Oncológicos', description: 'Aplicación de quimioterapia, radioterapia e inmunoterapia.' },
    { icon: 'healing', title: 'Cirugía Oncológica', description: 'Procedimientos quirúrgicos especializados en oncología.' },
    { icon: 'fact_check', title: 'Segunda Opinión Médica', description: 'Revisión de diagnósticos para una mejor decisión de tratamiento.' },
    { icon: 'healing', title: 'Cáncer de mama', description: 'Biopsias.' },
    { icon: 'healing', title: 'Cáncer gastrointestinal' },
    { icon: 'healing', title: 'Cáncer de Piel', description: 'Melanoma.' },
    { icon: 'healing', title: 'Sarcoma de Tejidos Blandos' },
    { icon: 'healing', title: 'Tumores de Vías Urinarias'},
    { icon: 'healing', title: 'Tumores Ginecológicos', description: 'Ovario, útero.' },
  ];
}
