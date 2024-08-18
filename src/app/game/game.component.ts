import { CommonModule } from '@angular/common';
import { Component ,OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from "../player/player.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, MatButtonModule, MatIconModule],
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
    
    
  }

  takeCard() {
    if(!this.pickCardAnimation) {
    const card = this.game.stack.pop();
    this.currentCard = card !== undefined ? card : ''; 
    this.pickCardAnimation = true;
    console.log('New Card: ' + this.currentCard);
    console.log('Game is', this.game);
    
    setTimeout(() => {
      this.game.playedCards.push(this.currentCard);
      this.pickCardAnimation = false;
    }, 1000);
  }
}

}
