import {Component, OnInit} from 'angular2/core';
import {GameComponent} from './game/game.component';
import {Logo} from './logo.component';
import {Game} from './game/game'
import {GameService} from './game/game.service';


@Component({
	selector: 'g3-library',
	templateUrl: 'app/app.component.html',
	styleUrls: ['app/app.component.css'],
	directives: [GameComponent, Logo],
	providers: [GameService]
})
export class AppComponent implements OnInit {
	private games: Game[];

	constructor(private _gameService: GameService) {}

	getGames() {
		this._gameService.getGames().then(games => this.games = games);
	}

	ngOnInit() {
		this.getGames();
	}
}