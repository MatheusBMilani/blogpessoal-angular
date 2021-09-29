import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

userLogin: UserLogin = new UserLogin()


  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar(){
    this.auth.entrar(this.userLogin).subscribe((resp:UserLogin)=>{
      this.userLogin=resp
    })

    environment.foto = this.userLogin.foto
    environment.id = this.userLogin.id
    environment.nome = this.userLogin.nome
    environment.token = this.userLogin.token

    this.router.navigate(['/inicio'])
  }



}
