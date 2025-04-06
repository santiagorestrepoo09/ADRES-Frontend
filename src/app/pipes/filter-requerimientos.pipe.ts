import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRequerimientos'
})
export class FilterRequerimientosPipe implements PipeTransform {
  transform(items: any[], filtro: any): any[] {
    if (!items) return [];
    if (!filtro) return items;

    return items.filter(item => {
      const Proveedor = filtro.proveedor?.toLowerCase() || '';
      const estado = filtro.estado?.toLowerCase() || '';
      const unidad = filtro.unidad?.toLowerCase() || '';

      const matchProveedor = item.Proveedor?.toLowerCase().includes(Proveedor);
      const matchEstado = item.estado?.toLowerCase().includes(estado);
      const matchUnidad = item.unidad?.toLowerCase().includes(unidad);

      return matchProveedor && matchEstado && matchUnidad;
    });
  }
}
