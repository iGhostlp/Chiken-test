import { Component } from '@angular/core';
import {Chicken} from './models/chicken';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedChicken: Chicken = new Chicken();
  chickenArray : Chicken[] = [
    {id: 1, name:"Robertita",eggs :0},
    {id: 2, name:"Cleta",eggs: 1},
    {id: 3, name:"Cuack",eggs: 2}
  ];

  openForEdit(chicken:Chicken){
    this.selectedChicken = chicken;

  }

  addOrEdit(){
    if(this.selectedChicken.id == 0){
    this.selectedChicken.id = this.chickenArray.length +1;
    this.chickenArray.push(this.selectedChicken);
    }
    this.selectedChicken = new Chicken();
  
}
delete(){
  if(confirm ('Are you sure?')){
    this.chickenArray = this.chickenArray.filter( x => x != this.selectedChicken);
    this.selectedChicken = new Chicken();
  }
}


}
