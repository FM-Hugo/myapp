import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total',
})
export class TotalPipe implements PipeTransform {
  transform(val: number, coef: number, prixTTC?: number): number {
    if (prixTTC) return val * coef * (1 + prixTTC / 100);
    return val * coef;
  }
}
