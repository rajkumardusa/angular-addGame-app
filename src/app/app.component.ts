import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'games-app';

  public games:any[]=["Foot Ball","Volley Ball","Cricket","Hockey"];
  public selectedGame:any="";
  inputValue:string="";

  constructor(){}

  selectGame(i:any){
    this.selectedGame=i;
  }
  addGame(){
    this.games.push(this.inputValue);
    this.inputValue="";
    console.log(this.games); 
  }
  removeGame(i:any){
    this.games.splice(i,1);
  }
}
