import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) {
    // console.log('Constructor');
  }

  ngOnInit() {}

  buscarHeroe( termino: string ) {
    // console.log( termino );
    if (termino !== '' && termino.length > 0) {
      this.router.navigate( ['/busqueda', termino] );
    }
  }
}
