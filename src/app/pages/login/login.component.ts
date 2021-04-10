import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InvalidCredentialsError } from 'src/app/shared/errors/invalid-credentials-error';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private readonly formBuilder: FormBuilder, private readonly router: Router, private readonly authService: AuthService) {}

  ngOnInit(): void {
    this.setForm();
  }

  login(): void {
    const { email, password } = this.form.getRawValue();

    this.authService.login(email, password).subscribe(result => {
      if (result instanceof InvalidCredentialsError) {
        return alert(result.message);
      }

      this.router.navigate(['/albums']);
    });
  }

  private setForm(): void {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }
}
