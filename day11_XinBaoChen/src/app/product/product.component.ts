import { Component } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  firstName = 'Peter'
  lastName = 'Pan'
  productId:number = 123;
  stockStatus:string = 'Yes'
  getStockStatues(){
    return this.stockStatus
  }
}
