import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Adquisicion {
  presupuesto: string;
  unidad: string;
  tipo_bien_servicio: string;
  cantidad: number;
  valor_unitario: number;
  valor_total: number;
  fecha_adquisicion: string;
  proveedor: string;
  estado: string; // "activo" o "inactivo"
  documentacion: string;
}

@Injectable({
  providedIn: 'root'
})
export class AdquisicionesService {

  private apiUrl = 'http://127.0.0.1:8000/adquisiciones';

  constructor(private http: HttpClient) {}

  // Obtener todas las adquisiciones
  obtenerAdquisiciones(): Observable<Adquisicion[]> {
    return this.http.get<Adquisicion[]>(this.apiUrl);
  }

  // Crear una nueva adquisición
  crearAdquisicion(adquisicion: Adquisicion): Observable<any> {
    return this.http.post(this.apiUrl, adquisicion);
  }

  // Actualizar el estado de una adquisición (activo/inactivo)
  actualizarEstado(indice: number, nuevoEstado: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${indice}/estado?nuevo_estado=${nuevoEstado}`, {});
  }
  //Eliminar una adquisición
  eliminarAdquisicion(index: number) {
    return this.http.delete(`${this.apiUrl}/${index}`);
  }
  // Método para actualizar una adquisición
  actualizarAdquisicion(indice: number, item: Adquisicion): Observable<any> {
    const url = `${this.apiUrl}/${indice}`;
    return this.http.put(url, item);
  }

  // Método para crear un evento
  crearEvento(evento: any): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/eventos', evento);
  }
  obtenerEventos(): Observable<any[]> {
    return this.http.get<any[]>('http://127.0.0.1:8000/eventos');
  }
}
