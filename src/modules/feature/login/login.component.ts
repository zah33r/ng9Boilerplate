import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    options: FormGroup;
    ngOnInit(): void {}

    constructor(fb: FormBuilder, private router: Router) {
        this.options = fb.group({
            color: 'primary',
            fontSize: [16, Validators.min(10)]
        });
    }

    getFontSize() {
        return Math.max(10, this.options.value.fontSize);
    }

    login() {
        this.router.navigate(['/dashboard']);
    }
}
