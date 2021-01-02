import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor() {}

  ngOnInit(){
    console.log('Voltamos garoto!');
  }

  marcarFumei(){
    console.log('Agora simmmm');
    const horario = this.pegarHorario();
    console.log('Horario aqui:', horario);

    // var horas = testando.getHours();
    // var minutos = testando.getMinutes();
    // var segundos = testando.getSeconds();
    // var outroTeste = testando.getTime();

  }

  pegarHorario(){
    const data = Date.now();
    console.log('Data aqui:', data);
    console.log('Typeof data: ', typeof(data));
    const testando = new Date(data * 1000);
    console.log('Testando:' , testando);
    return testando;
  }
}
