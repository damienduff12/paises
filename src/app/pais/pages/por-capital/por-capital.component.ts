import { Component } from '@angular/core';
import { Country } from '../../interfaces/pasi.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {

 
  termino:string='' 
  hayError: boolean=false;
  paises:Country[]=[];

  constructor(private paisservice:PaisService) { }

  buscar(termino:string){
    this.hayError=false;
    this.termino=termino;
    

    this.paisservice.buscarCapita(termino)
    .subscribe((paises)=>{
     
      this.paises=paises;

      
      
    },(err)=>{
      this.hayError=true
      this.paises=[];

    });
  }

}
