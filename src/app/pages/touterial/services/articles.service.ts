import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ArticlesService {
  articleName$:Subject<string>=new Subject<string>();
  constructor() { }

  setArticle(value:string){
    console.log('oooyyy');

    this.articleName$.next(value)
  }

}
