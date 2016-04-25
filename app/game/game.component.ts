import {Component, Input} from 'angular2/core';
import {Game} from './game';

@Component({
	selector: 'game-icon',
	templateUrl: 'app/game/game.component.html',
	styleUrls: ['app/game/game.component.css']
})
export class GameComponent {
	@Input() game: Game;
}