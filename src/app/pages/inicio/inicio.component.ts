import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdquisicionesService, Adquisicion } from 'src/app/services/adquisiciones.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  requerimientos: any[] = [];
  requerimientosFiltrados: any[] = [];
  filtro: any = {
    tipo_bien_servicio: '',
    estado: '',
    valor_unitario: ''
  };
  evento = {
    factura: '',
    tipo_evento: '',
    descripcion: '',
    datos_afectados: {} as Adquisicion,
  };
  constructor(
    private router: Router,
    private adquisicionesService: AdquisicionesService
  ) {}

  ngOnInit(): void {
    this.cargarRequerimientos();
  }

  editarRequerimiento(item: any) {
    item.editando = true;
  }
  // Guarda los cambios realizados
  guardarEdicion(indice: number, item: Adquisicion) {
    const confirmar = window.confirm("¿Estás seguro de que deseas actualizar?");
    if (!confirmar) {
      return; 
    }
    console.log("Guardando cambios...");
  
    this.adquisicionesService.actualizarAdquisicion(indice, item).subscribe({
      next: (response) => {
        console.log('Adquisición actualizada:', response);
        this.requerimientosFiltrados[indice] = response.registro_actualizado;
        // Registrar el evento después de actualizar
        this.evento = {
          factura: (item as any).factura,
          tipo_evento: 'Actualización',
          descripcion: `Se actualizó el requerimiento con índice ${indice}`,
          datos_afectados: item
        };
        this.registrarEvento();
      },
      error: (err) => {
        console.error('Error al actualizar adquisición:', err);
      }
    });
  }

   // Método para enviar el evento al backend
   registrarEvento() {
    this.adquisicionesService.crearEvento(this.evento).subscribe(
      (response) => {
        console.log('Evento registrado:', response);
      },
      (error) => {
        console.error('Error al registrar el evento:', error);
        alert('Error al registrar el evento');
      }
    );
  }

  // Cancela la edición
  cancelarEdicion(item: any) {
    item.editando = false; // Desactiva el modo de edición
    // Aquí puedes restaurar los valores si no se han guardado
    console.log('Edición cancelada');
  }

  aplicarFiltros() {
      this.requerimientosFiltrados = this.requerimientos.filter(req => {
      const Proveedor = !this.filtro.proveedor || req.proveedor.toLowerCase().includes(this.filtro.proveedor.toLowerCase());
      const estadoCoincide = !this.filtro.estado || req.estado.trim().toLowerCase() === this.filtro.estado.trim().toLowerCase();
      const unidad = !this.filtro.unidad || req.unidad.toLowerCase().includes(this.filtro.unidad.toLowerCase());
      return Proveedor && estadoCoincide && unidad;
    });
  
  }
  

  cargarRequerimientos(): void {
    this.adquisicionesService.obtenerAdquisiciones().subscribe({
      next: (datos) => {
        this.requerimientos = datos;
        console.log('Requerimientos cargados:', this.requerimientos);
      },
      error: (err) => {
        console.error('Error al cargar adquisiciones:', err);
      }
    });
    
  }

  irAGestion() {
    this.router.navigate(['/adquisiciones']);
  }

  irAlmacenamientoHistorico() {
    this.router.navigate(['/almacenamientoHistorico']);
  }

  salir() {
    this.router.navigate(['/login']);
  }

  toggleEstado(index: number) {
    const confirmar = window.confirm("¿Estás seguro de que deseas cambiar de estado?");
    if (!confirmar) {
      return; 
    }
    const requerimiento = this.requerimientos[index];
    const nuevoEstado = requerimiento.estado === 'activo' ? 'inactivo' : 'activo';

    this.adquisicionesService.actualizarEstado(index, nuevoEstado)
      .subscribe({
        next: (res) => {
          this.requerimientos[index].estado = nuevoEstado;
          console.log(res.mensaje);
        },
        error: (err) => {
          console.error('Error al actualizar el estado', err);
          alert('Error al actualizar el estado en el servidor.');
        }
      });
  }

  eliminarRequerimiento(index: number) {
    const confirmar = window.confirm("¿Estás seguro de que deseas eliminar este requerimiento?");
    if (!confirmar) {
      return; 
    }
    this.adquisicionesService.eliminarAdquisicion(index).subscribe({
      next: (res) => {
        console.log(res);
        this.requerimientos.splice(index, 1); 
      },
      error: (err) => {
        console.error('Error eliminando el requerimiento:', err);
      }
    });
  }
}
