import storyConfig from './config.json'

import macros from './macro'
import templates from './template'

import Core from './GameEngine/Core'
import { logger } from '@util/Logging'
import { loadGameData, saveGameData } from '@GameEngine/utils'

Config = { ...Config, ...storyConfig };
setup.ImagePath = "assets/";

((Config, State, Story, Engine, Dialog, $document) => {
	$(document.head).append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.2.0/css/fork-awesome.min.css" integrity="sha256-XoaMnoYC5TH6/+ihMEnospgm0J1PM/nioxbOUdnM8HY=" crossorigin="anonymous">')
	// Set State Variables
	variables().debug = Config.debug
	
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

	Save.onSave.add(function (save, details) {
		switch (details.type) {
			case 'serialize':
				logger('serialize')
				break
			case 'autosave':
			case 'disk':
			default:
				logger('Saving Game Data...')
				save.GameData = saveGameData()
		}
	})

	Save.onLoad.add(function (save) {
		loadGameData(save.GameData)
	})
})(Config, State, Story, Engine, Dialog, $(document));