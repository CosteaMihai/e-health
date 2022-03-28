import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor() {}

  keysToCamel(o: any): any {
    if (this.isObject(o)) {
      const n: any = {};

      Object.keys(o).forEach((k) => {
        n[this.snakeCasetoCamelCase(k)] = this.keysToCamel(o[k]);
      });
      return n;
    } else if (this.isArray(o)) {
      return o.map((i: any) => {
        return this.keysToCamel(i);
      });
    }

    return o;
  }

  snakeCasetoCamelCase(str: string): string {
    return str.replace(/([-_][a-z])/gi, ($1) => {
      return $1.toUpperCase().replace('-', '').replace('_', '');
    });
  }

  isObject(o: any): boolean {
    return o === Object(o) && !this.isArray(o) && typeof o !== 'function';
  }

  isArray(a: any): boolean {
    return Array.isArray(a);
  }

  keysToSnake(o: any): any {
    if (this.isObject(o)) {
      const n: any = {};

      Object.keys(o).forEach((k) => {
        n[this.camelCaseToSnakeCase(k)] = this.keysToSnake(o[k]);
      });

      return n;
    } else if (this.isArray(o)) {
      return o.map((i: any) => {
        return this.keysToSnake(i);
      });
    }

    return o;
  }

  camelCaseToSnakeCase(str: string): string {
    return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
  }
}
