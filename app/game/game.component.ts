import {Component} from 'angular2/core';

@Component({
	selector: 'game-icon',
	templateUrl: 'app/game/game.component.html',
	styleUrls: ['app/game/game.component.css']
})
export class GameComponent {
	private name = "Time Stories";
	private whom = "Matt A.";
}