import { Component } from '@angular/core';
import { FavChangedInfo } from './favorite.component';
import * as PptxGenJS from 'pptxgenjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: 'Title',
    isFavorite: true
  };

  viewMode = 'map';

  generatePpt() {
    const pptx = new PptxGenJS();
    pptx.setBrowser(true);
    const slide = pptx.addNewSlide();
    slide.addText('BONJOUR - CIAO - GUTEN TAG - HELLO - HOLA - NAMASTE - OLÀ - ZDRAS-TVUY-TE - こんにちは - 你好',
    { x: 0, y: 1, w: '100%', align: 'center', h: 2, color: '0088CC', fill: 'F1F1F1', fontSize: 24 });
    pptx.save('Sample presentation');
    console.log(slide);
  }

  onFavoriteChange(newEvent: FavChangedInfo) {
    this.post.isFavorite = !this.post.isFavorite;
    console.log('Favorite changed to: ', newEvent.newValue);
  }

}
