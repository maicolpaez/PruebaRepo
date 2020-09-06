import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  title = 'Dirty Legs Veterinaria';
  visitas = '85 Visitas el dia de hoy';
  ngOnInit(): void {
  }

}
