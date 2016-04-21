import {Component} from 'angular2/core';
import {GameComponent} from './game/game.component';

@Component({
	selector: 'g3-library',
	templateUrl: 'app/app.component.html',
	styleUrls: ['app/app.component.css'],
	directives: [GameComponent]
})
export class AppComponent {
	private title = "G3 Library"
}