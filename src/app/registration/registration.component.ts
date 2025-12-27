import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
    selector: 'app-registration',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
    fb = inject(FormBuilder);
    userService = inject(UserService);
    router = inject(Router);

    registrationForm = this.fb.group({
        nome: ['', Validators.required],
        email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
        senha: ['', [Validators.minLength(8)]]
    });
    submitted = false;

    onSubmit() {
        this.submitted = true;

        if (this.registrationForm.valid) {
            const userData = this.registrationForm.value;
            this.userService.saveUser(userData);
            this.router.navigate(['/informacoes']);
        }
    }

    get f() { return this.registrationForm.controls; }
}
