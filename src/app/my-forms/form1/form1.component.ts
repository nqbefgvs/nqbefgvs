import {Component, Injectable} from "@angular/core";
import {AbstractControl, AsyncValidator, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {catchError, delay, map, Observable, of} from "rxjs";

@Component({
  selector: 'form1',
  templateUrl: 'form1.component.html',
  styleUrls: ['form1.component.scss']
})
export class Form1Component {
  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  hero = { name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0] };

  heroForm!: FormGroup;

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      name: new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4),
        (control: AbstractControl): ValidationErrors | null => {
          const forbidden = /bob/i.test(control.value);
          return forbidden ? {forbiddenName: {value: control.value}} : null;
        }
      ]),
      alterEgo: new FormControl(this.hero.alterEgo, {
        asyncValidators: [this.alterEgoValidator.validate.bind(this.alterEgoValidator)],
        updateOn: 'blur'
      }),
      power: new FormControl(this.hero.power, Validators.required)
    },  { validators: (control: AbstractControl): ValidationErrors | null => {
        const name = control.get('name');
        const alterEgo = control.get('alterEgo');

        return name && alterEgo && name.value === alterEgo.value ? { identityRevealed: true } : null;
      } }); // <-- add custom validator at the FormGroup level
  }

  get name() { return this.heroForm.get('name')!; }

  get power() { return this.heroForm.get('power')!; }

  get alterEgo() { return this.heroForm.get('alterEgo')!; }

  constructor(private alterEgoValidator: UniqueAlterEgoValidator) { }

}

@Injectable({
  providedIn: 'root'
})
class UniqueAlterEgoValidator implements AsyncValidator {

  private ALTER_EGOS = ['Eric'];

  validate(
    ctrl: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return of(this.ALTER_EGOS.includes(ctrl.value)).pipe(delay(400)).pipe(
      map(isTaken => (isTaken ? { uniqueAlterEgo: true } : null)),
      catchError(() => of(null))
    );
  }
}
