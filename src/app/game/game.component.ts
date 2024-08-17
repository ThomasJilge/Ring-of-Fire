import { CommonModule } from '@angular/common';
import { Component ,OnInit } from '@angular/core';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string = '';
  game: Game = new Game;

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
    
  }

  takeCard() {
    if(!this.pickCardAnimation) {
    const card = this.game.stack.pop();
    this.currentCard = card !== undefined ? card : ''; 
    console.log(this.currentCard);
    this.pickCardAnimation = true;

    setTimeout(() => {
      this.pickCardAnimation = false;
    }, 1500);
  }
}

  // takeCard() {
  //   this.currentCard = this.game.stack.pop();
  //   this.pickCardAnimation = true;
  // }

}
