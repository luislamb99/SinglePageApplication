import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService} from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number;
  heroes: any [] = [];
  private _heroesService: HeroesService;
  termino: string;

  constructor(private activatedRoute: ActivatedRoute,
              _heroesService: HeroesService,
              private router: Router ) {
    this._heroesService = _heroesService;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes( params['termino'] );
      // console.log( this.heroes );
    });
  }

  verHeroe() {
    // console.log('Indice: ' + idx);
    this.router.navigate( ['/heroe', this.index] );
  }

}
