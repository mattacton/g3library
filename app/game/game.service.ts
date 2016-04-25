import {Injectable} from 'angular2/core';
import {Game} from './game';
import {GAMES} from './mock-games';

@Injectable()
export class GameService {
	getGames() {
		return Promise.resolve(GAMES);
	}
}