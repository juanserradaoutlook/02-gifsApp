import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  constructor(private gifsService: GifsService) { }

  get historialGifs(){
    return [...this.gifsService.historial];
  }

  buscar(gifs: string){
    console.log(gifs);
    this.gifsService.buscarGifs(gifs);
  }


}
