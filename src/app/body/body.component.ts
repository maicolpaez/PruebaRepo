import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  usuario = 'Elizabeth Gillies';
  ///////
  urlCocker ='./assets/cocker.jpg';
  mostrarCocker:boolean = false;
  mostrarParrafo:boolean = false;
  ///////
  adopcionUrl = ['./assets/familia.jpg','./assets/cariño.jpg','./assets/camina.jpg'];
  mostrarAdopcion:boolean = true;
  ///////
  positions = ['./assets/max.jpg','./assets/sam.jpg','./assets/tom.jpg','./assets/jerry.jpg'];
  adopcionUrl2 = this.positions;
  mostrarAdopcion2:boolean = false;

  ////////
  
  mostrarDisponibles:boolean = true;
  urlAnimales = [['./assets/perro1.jpg','./assets/labrador.jpg','./assets/french.jpg'],
                 ['./assets/angora.jpg','./assets/gatopeluche.jpg','./assets/ruso.jpg'],
                 ['./assets/memo.jpg','./assets/paco.jpg','./assets/remi.png']];


  disponibles = {'./assets/perro1.jpg': {nombre:"Chiki", raza:"Pincher", descripcion:"Hermoso perro de pequeño tamaño",estado:false}, 
                './assets/labrador.jpg': {nombre:"Kiara", raza:"Labrador",descripcion:"Hermosa labradora de medio año", estado:false},
                './assets/french.jpg': {nombre:"Lucia", raza:"French Podol", descripcion:"Perrita con mucho amor que dar",estado:false},
                './assets/angora.jpg': {nombre:"Katty", raza:"Angora", descripcion:"Gata de raza independiente y amorosa",estado:false},
                './assets/gatopeluche.jpg': {nombre:"Tomy", raza:"Sponch", descripcion:"Gatito tipo tazita de te",estado:false},
                './assets/ruso.jpg': {nombre:"Jade", raza:"Azul ruso", descripcion:"Gato ruso azul con un caracter un poco fuerte",estado:false},
                './assets/memo.jpg': {nombre:"Memo", raza:"Tortuga", descripcion:"Tortuga muy imperactiva distintas a lo normal",estado:false},
                './assets/paco.jpg': {nombre:"Paco", raza:"Loro", descripcion:"Le fascina cantar en las noches",estado:false},
                './assets/remi.jpg': {nombre:"Remi", raza:"Nutria ", descripcion:"Amorosa y hermosa compañia",estado:false},
}

  ngOnInit(): void {
  }

}
