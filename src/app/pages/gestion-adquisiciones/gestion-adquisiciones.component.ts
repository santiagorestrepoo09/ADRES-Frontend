import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdquisicionesService } from 'src/app/services/adquisiciones.service'; // Ajusta si la ruta cambia

@Component({
  selector: 'app-gestion-adquisiciones',
  templateUrl: './gestion-adquisiciones.component.html',
  styleUrls: ['./gestion-adquisiciones.component.css']
})
export class GestionAdquisicionesComponent {
  adquisicion = {
    presupuesto: '',
    unidad: '',
    tipo_bien_servicio: '',
    cantidad: 0,
    valor_unitario: 0,
    valor_total: 0,
    fecha_adquisicion: '',
    proveedor: '',
    estado: '',
    documentacion: ''  ,
    numero_orden: '',
    factura: '',
  };
  formSubmitted: boolean = false;

  constructor(
    private router: Router,
    private adquisicionesService: AdquisicionesService
  ) {}

  registrarAdquisicion() {

    const camposRequeridos = [
      this.adquisicion.presupuesto,
      this.adquisicion.unidad,
      this.adquisicion.tipo_bien_servicio,
      this.adquisicion.cantidad,
      this.adquisicion.valor_unitario,
      this.adquisicion.valor_total,
      this.adquisicion.fecha_adquisicion,
      this.adquisicion.proveedor,
      this.adquisicion.estado,
      this.adquisicion.documentacion,
      this.adquisicion.numero_orden,
      this.adquisicion.factura
    ];
  
    const camposVacios = camposRequeridos.some(valor => valor === null || valor === '' || valor === 0);
  
    if (camposVacios) {
      alert('⚠️ Por favor, completa todos los campos obligatorios.');
      return;
    }
    // Calcula el valor total antes de enviar
    this.adquisicion.valor_total =
      this.adquisicion.cantidad * this.adquisicion.valor_unitario;

    // Establece estado por defecto si no lo eligieron
    if (!this.adquisicion.estado) {
      this.adquisicion.estado = 'activo';
    }

    this.adquisicionesService.crearAdquisicion(this.adquisicion).subscribe({
      next: (res) => {
        console.log('✅ Adquisición registrada exitosamente', res);
        alert('✅ Adquisición registrada exitosamente');

        // Limpiar formulario
        this.adquisicion = {
          presupuesto: '',
          unidad: '',
          tipo_bien_servicio: '',
          cantidad: 0,
          valor_unitario: 0,
          valor_total: 0,
          fecha_adquisicion: '',
          proveedor: '',
          estado: '',
          documentacion: '',
          numero_orden: '',
          factura: '',
        };
        this.formSubmitted = true;
      },
      error: (err: any) => {
        console.error('❌ Error al registrar adquisición', err);
        alert('❌ Error al registrar adquisición');
      }
    });
  }

  regresar() {
    this.router.navigate(['/inicio']);
  }
}
