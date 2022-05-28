Macro.add('deskCommands', {
    skipArgs: false,
    handler: function () {
        let $empty = $('<div/>').attr('id', 'desk-empty').addClass('desk-commands desk-visable')
        $(this.output)
            .append($empty)
            .append(getConstructionCommands())
            .append(getInteractCommands())
            .append(getCommandCommands())
    }
})

function getConstructionCommands() {
    let { $wrapper, $leftPanel, $rightPanel } = createPanels('desk-construction')
    $leftPanel.wiki(`<<button 'Upgrade Community'>><</button>>`)
    $rightPanel.wiki(`<<buyBuildingControl 'Gathering Hut'>><</buyBuildingControl>>`)
    $leftPanel.wiki(`<<buyBuildingControl 'Workshop'>><</buyBuildingControl>>`)
    $rightPanel.wiki(`<<buyBuildingControl 'Factory'>><</buyBuildingControl>>`)
    $leftPanel.wiki(`<<button 'Market'>><</button>>`)
    $rightPanel.wiki(`<<button 'Library'>><</button>>`)
    $leftPanel.wiki(`<<button 'Clinic'>><</button>>`)
    return $wrapper
}

function getInteractCommands() {
    let { $wrapper, $leftPanel, $rightPanel } = createPanels('desk-interact')
    $leftPanel.wiki(`<<button 'Inspect Golems'>><</button>>`)
    $rightPanel.wiki(`<<button 'Pick Up Golems'>><</button>>`)
    $leftPanel.wiki(`<<button 'Play With Golems'>><</button>>`)
    $rightPanel.wiki(`<<button 'Taste Golem'>><</button>>`)
    $leftPanel.wiki(`<<button 'Eat Golem'>><</button>>`)
    $rightPanel.wiki(`<<button 'Step on Golems'>><</button>>`)
    $leftPanel.wiki(`<<button 'Put Golems in Shoes'>><</button>>`)
    $rightPanel.wiki(`<<button 'Put Golems in Underwear'>><</button>>`)
    $leftPanel.wiki(`<<button 'Masturbate With Golems'>><</button>>`)
    return $wrapper
}

function getCommandCommands() {
    let { $wrapper, $leftPanel, $rightPanel } = createPanels('desk-command')
    $leftPanel.wiki(`<<button 'Do Tricks'>><</button>>`)
    $rightPanel.wiki(`<<button 'Back Massage'>><</button>>`)
    $leftPanel.wiki(`<<button 'Foot Massage'>><</button>>`)
    $rightPanel.wiki(`<<button 'Rub Your Stomach'>><</button>>`)
    $leftPanel.wiki(`<<button 'Kiss Your Toes'>><</button>>`)
    $rightPanel.wiki(`<<button 'Worship Your Feet'>><</button>>`)
    $leftPanel.wiki(`<<button 'Climb Into Your Mouth'>><</button>>`)
    $rightPanel.wiki(`<<button 'Climb Your Bulge'>><</button>>`)
    $leftPanel.wiki(`<<button 'Get You Off'>><</button>>`)
    $rightPanel.wiki(`<<button 'Worship Your Body'>><</button>>`)
    return $wrapper
}

function createPanels(id) {
    let $leftPanel = $('<div/>').addClass(`items`)
    let $rightPanel = $('<div/>').addClass(`items`)
    let $wrapper = $('<div/>').attr('id',id).addClass(`desk-commands`).append($leftPanel).append($rightPanel)
    return { $wrapper, $leftPanel, $rightPanel }
}
