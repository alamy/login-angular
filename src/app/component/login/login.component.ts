import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public validation!: boolean;
  constructor( private router: Router) {}

  ngOnInit() {
  }

  Enter(form: any) {
    if(form.usuario.value === 'admin' && form.senha.value === "admin") {
      console.log('true')
      this.router.navigate(['/home']);
    } else {
      this.validation = false
      console.log(this.validation)
    }
  }

}
