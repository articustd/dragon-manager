// import { startGame } from '@GameEngine/Core';
import storyConfig from './config.json'
import golemTemplate from './template/golemTemplate'
import startTimer from './macro/startTimer'
import * as Core from './GameEngine/Core'
import Phaser from 'phaser'
import { logger } from '@util/Logging'
Config = { ...Config, ...storyConfig };
setup.ImagePath = "assets/";

((Config, State, Story, Engine, Dialog, $document) => {
	$(document.head).append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.2.0/css/fork-awesome.min.css" integrity="sha256-XoaMnoYC5TH6/+ihMEnospgm0J1PM/nioxbOUdnM8HY=" crossorigin="anonymous">')
	// Set State Variables
	// startGame()
	variables().debug = Config.debug
	logger(Core.getGame())
	// Register custom SugarCube macros
	// registerAlert(Macro, Dialog);

	// Register plugin modules
	// registerTitleMatchProperties({ State, Story, $document });

	// Register components
	// registerHeader($document);

	// Setup noreturn
	$document.on(':passagestart', function (ev) {
		if (!ev.passage.tags.includes('noreturn'))
			variables().return = ev.passage.title;
	});
})(Config, State, Story, Engine, Dialog, $(document));