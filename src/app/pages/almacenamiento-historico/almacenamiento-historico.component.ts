import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdquisicionesService } from 'src/app/services/adquisiciones.service';

@Component({
  selector: 'app-almacenamiento-historico',
  templateUrl: './almacenamiento-historico.component.html',
  styleUrls: ['./almacenamiento-historico.component.css']
})
export class AlmacenamientoHistoricoComponent implements OnInit {
  eventos: any[] = []; // Lista completa de eventos
  eventosFiltrados: any[] = []; // Lista filtrada de eventos
  filtroFactura: string = ''; // Valor del filtro

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
        this.eventosFiltrados = [...this.eventos]; // Inicializa eventosFiltrados con todos los eventos
        console.log('Eventos cargados:', this.eventos);
      },
      error: (err) => {
        console.error('Error al cargar eventos:', err);
      }
    });
  }

  aplicarFiltro(): void {
    this.eventosFiltrados = this.eventos.filter(evento =>
      evento.factura.toLowerCase().includes(this.filtroFactura.toLowerCase())
    );
  }

  regresar() {
    this.router.navigate(['/inicio']);
  }
}
