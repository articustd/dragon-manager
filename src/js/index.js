import { startGame } from '@controller/gameloop';
import storyConfig from './config.json'
import startTimer from './macro/startTimer'
Config = { ...Config, ...storyConfig };
setup.ImagePath = "assets/";

((Config, State, Story, Engine, Dialog, $document) => {
	$(document.head).append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.2.0/css/fork-awesome.min.css" integrity="sha256-XoaMnoYC5TH6/+ihMEnospgm0J1PM/nioxbOUdnM8HY=" crossorigin="anonymous">')
	// Set State Variables
	startGame()
	
	// Register custom SugarCube macros
	// registerAlert(Macro, Dialog);

	// Register plugin modules
	// registerTitleMatchProperties({ State, Story, $document });

	// Register components
	// registerHeader($document);

	// Setup noreturn
	// $document.on(':passagestart', function (ev) {
	// 	if (!ev.passage.tags.includes('noreturn'))
	// 		State.variables.return = ev.passage.title;
	// });
})(Config, State, Story, Engine, Dialog, $(document));