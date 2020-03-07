import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidatorFn} from '@angular/forms';

@Directive({
  selector: '[appLevel3Nodes]',
  providers: [{provide: NG_VALIDATORS, useExisting: Level3NodesDirective, multi: true}]
})
export class Level3NodesDirective {

  @Input('appLevel3Nodes') level3Nodes: string[];

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.level3Nodes ? Level3NodesValidator(this.level3Nodes)(control)
      : null;
  }

}

export function Level3NodesValidator(level3Nodes: string[]): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = !level3Nodes.includes(control.value);
    return forbidden ? {notLevel3: {value: control.value}} : null;
  };
}
