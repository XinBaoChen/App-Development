import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_component';

  //property binding
  isDisabled:boolean = true

  //interpolation binding
  btnText:string = "I am disable!"
  //set button to be active in 5 seconds

  constructor(){
    setTimeout(()=>{
      this.isDisabled=false;
      this.btnText = 'Click Now!'
      }, 5000)
  }
  //event binding
  prod1:string = 'Product 1 added'
  totalProd1: number = 20
  totalProd1Added:number = 0
  btnDisabled:boolean = false
  btnProdeTex:string = 'Add product 1'
  addProduct(){
    this.totalProd1--
    this.totalProd1Added++
    if(this.totalProd1 == 0){
      this.btnDisabled = true
      this.btnProdeTex ='Out of Stock'
    }
  }
}
