import { Component } from '@angular/core';

@Component({
  selector: 'sg-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.scss'],
})
export class AlertasComponent {
  datosAlertas = [
    {
      id: 1,
      nombre: 'Nueva Asignación',
      tiempo: '0 días',
      estatus: 'Activo',
    },
    {
      id: 2,
      nombre: 'Aviso de 30 días',
      tiempo: '30 días',
      estatus: 'Activo',
    },
    {
      id: 3,
      nombre: 'Aviso 50 días',
      tiempo: '50 días',
      estatus: 'Inactivo',
    },
    {
      id: 4,
      nombre: 'Aviso 60 días',
      tiempo: '90 días',
      estatus: 'Activo',
    },
  ];

  editarAlerta(nombre: string) {
    console.log(`Editar alerta: ${nombre}`);
    // Puedes agregar lógica adicional según tus necesidades
  }
}
