import {Directive, forwardRef, Attribute, Input, HostBinding} from '@angular/core';
import {Validator, AbstractControl, NG_VALIDATORS, ValidationErrors, ValidatorFn} from '@angular/forms';

@Directive({
  selector: '[appInputLimit]',
  providers: [
    {
      provide: NG_VALIDATORS, useExisting: forwardRef(() => InputLimitDirective),
      multi: true
    }
  ]
})
export class InputLimitDirective implements Validator {
  _max: number;
  @Input()
  set max(max) {
    if (max || max === 0) {
      this._max = max;
    } else {
      this._max = 9999;
    }
  }

  @Input() min: number;
  @HostBinding('class.mystyle') variableName: boolean;

  constructor() {}

  validate(control: AbstractControl): { [key: string]: any } | null {
    if (+control.value > this._max) {
      this.variableName = true;
      return {'max': {'error': 'max'}};
    } else if (+control.value < this.min) {
      return {'min': {'error': 'min'}};
    }
  }
}

/** 最大值最小值验证器
 <input type="text" appInputLimit id="name" name="name" class="form-control" nz-input [pattern]="regex.intNumber" [max]="100" [min]="0"
 [(ngModel)]="xxx" #name="ngModel">
 * */
