import {Component} from "@angular/core";
import {UntypedFormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AlertService} from "../../shared/alert/alert.services";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  form = this.fb.group({
    password: [null, [Validators.required]]
  })
  constructor(private readonly fb: UntypedFormBuilder,
              private readonly router: Router,
              private readonly alertService: AlertService
  ) {}

  onSubmit():void {
    if (this.form.get('password')?.value === 'oybek') {
      this.router.navigate(['home']).then();
    } else {
      this.alertService.error("Parol noto'g'ri", {}, false, 3000);
    }
  }
}
