import { Component, AfterViewInit } from '@angular/core';

declare var PureCounter: any;  // Agrega esta línea

@Component({
  selector: 'app-counts',
  templateUrl: './counts.component.html',
  styleUrls: ['./counts.component.css']
})
export class CountsComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // Inicializa PureCounter
    new PureCounter();
  }
}
