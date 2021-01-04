import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.listarQtdQFumei();
  }

  listarQtdQFumei(){
    console.log('Entramos no listar');
    const teste = this.http.get('api/data');
    teste.subscribe(valor => console.log(valor));
  }

}
