import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'valueToNameObj'
})
export class ValueToNameObjPipe implements PipeTransform {

  transform(value: number, enumTypes: any): string {
    return valueToLabel(value, enumTypes);
  }

}

export function valueToLabel(value: number, enumTypes: any) {
  let res = '';
  if (enumTypes[value]) {
    res = enumTypes[value];
  }
  return res;
}
