import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'IronMan', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado: string = "";
  // visible: boolean = false;

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || "";
    // if (this.heroes.length == 0) {
    //   this.visible = false;
    // }
  }



}



