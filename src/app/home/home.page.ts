import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private http: HttpClient) {}

  ngOnInit(){
    console.log('Voltamos garoto!');
  }

  marcarFumei(){
    console.log('Agora simmmm');
    const horario = this.pegarHorario();
    console.log('Horario aqui:', horario);

    return this.http.post('api/data', horario);

    // return { horario };
    // var horas = testando.getHours();
    // var minutos = testando.getMinutes();
    // var segundos = testando.getSeconds();
    // var outroTeste = testando.getTime();

  }

  pegarHorario(){
    const data = { data: Date.now()};
    console.log('Data aqui:', data);
    console.log('Typeof data: ', typeof(data));
    // const testando = new Date(data * 1000);
    // console.log('Testando:' , testando);
    return data;
  }

  listarQtdQFumei(){
    console.log('Entramos no listar');
    const teste = this.http.get('api/data');
    teste.subscribe(valor => console.log(valor));
  }
}
