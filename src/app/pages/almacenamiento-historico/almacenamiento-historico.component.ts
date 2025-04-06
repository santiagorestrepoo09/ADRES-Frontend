import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdquisicionesService, Adquisicion } from 'src/app/services/adquisiciones.service';


@Component({
  selector: 'app-almacenamiento-historico',
  templateUrl: './almacenamiento-historico.component.html',
  styleUrls: ['./almacenamiento-historico.component.css']
})
export class AlmacenamientoHistoricoComponent implements OnInit {
  eventos: any[] = []; // Variable para almacenar los eventos
    constructor(
      private router: Router,
      private adquisicionesService: AdquisicionesService
    ) {}

  ngOnInit(): void {
    this.cargarEventos();
  }


  cargarEventos(): void {
    this.adquisicionesService.obtenerEventos().subscribe({
      next: (data) => {
        this.eventos = data.map(evento => ({
          ...evento,
          datos_afectados: JSON.stringify(evento.datos_afectados) // Convierte a string
        }));
        console.log('Eventos cargados:', this.eventos);
      },
      error: (err) => {
        console.error('Error al cargar eventos:', err);
      }
    });
  }

  regresar() {
    this.router.navigate(['/inicio']);
  }
}
