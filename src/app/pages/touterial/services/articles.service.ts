import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ArticlesService {
  articleName$:Subject<string>=new Subject<string>();
  constructor() { }

  setArticle(value:string){
    this.articleName$.next(value)
  }

}
