import { getScene } from "@GameEngine/Core"
import { logger } from "@util/Logging"

export function showHUD() {
    let gatheringHut = getScene('StartGame').getBuilding('Gathering Hut')
    let workshop = getScene('StartGame').getBuilding('Workshop')
    let $container = $('<div/>').attr('id', 'hud')
    let $menuButton = $('<div/>').wiki(`Menu`).addClass('menuButton')

    let $saveButton = createMenuItem(`Saves`)
    let $restartButton = createMenuItem(`Restart`)

    let $tickerEditorButton = createMenuItem(`Ticker Editor`)
    let $hubButton = createMenuItem(`Hub`)
    let $hudTestButton = createMenuItem(`Hud Test`)
    let $eventTestButton = createMenuItem(`Event Test`)
    let $drawflowButton = createMenuItem(`Drawflow`)

    let $menuList = $('<ul/>').addClass('menu-list')
        .append($saveButton)
        .append($restartButton)
    let $menuVersion = $('<div/>').addClass('menu-version').wiki(variables().version)

    logger(variables())

    if (variables().dev)
        $menuList.append($tickerEditorButton)
            .append($hubButton)
            .append($hudTestButton)
            .append($eventTestButton)
            .append($drawflowButton)

    $menuButton.click(() => {
        Dialog.setup('Menu')

        $saveButton.click(() => { Dialog.close(); UI.saves(); })
        $restartButton.click(() => { Dialog.close(); UI.restart(); })

        if (variables().dev)
            devButtons()

        Dialog.append($menuList)
            .append($menuVersion)

        Dialog.open()
    })

    let devButtons = function () {
        $tickerEditorButton.click(() => { Dialog.close(); Engine.play("devRate") })
        $hubButton.click(() => { Dialog.close(); Engine.play("hub") })
        $hudTestButton.click(() => { Dialog.close(); Engine.play("hudTest") })
        $eventTestButton.click(() => { Dialog.close(); Engine.play("eventScenario") })
        $drawflowButton.click(() => { Dialog.close(); Engine.play("drawflow") })
    }
    
    $container.append($('<div/>').wiki(`''Golem''<div><<golemAvailableCounter>>/<<golemPopCounter>></div>`).addClass('hudItem'))
    $container.append($('<div/>').wiki(`<<manaBar>>''Mana''<</manaBar>>`).addClass('hudItem'))
    $container.append($('<span/>').wiki(`''Basic''<<resourceCounter 'Basic'>>`).addClass('hudItem'))
    $container.append($menuButton)

    showResource(gatheringHut, 'Complex', $container)
    showResource(workshop, 'Advanced', $container)
    // if (!gatheringHut.purchased)
    //     gatheringHut.on('PurchasedChange', (purchased) => {
    //         if (purchased)
    //             $container.append($('<span/>').wiki(`''Complex''<<resourceCounter 'Complex'>>`).addClass('hudItem'))
    //     })
    // else
    //     $container.append($('<span/>').wiki(`''Complex''<<resourceCounter 'Complex'>>`).addClass('hudItem'))

    $('#passages').before($container)
}

function createMenuItem(text) {
    return $('<li/>').append($('<div/>').wiki(text))
}

function showResource(building, resource, $container) {
    if (!building.purchased) {
        building.on('PurchasedChange', (purchased) => {
            if (purchased)
                $container.append($('<span/>').wiki(`''${resource}''<<resourceCounter '${resource}'>>`).addClass('hudItem'))
        })
    }
    else
        $container.append($('<span/>').wiki(`''${resource}''<<resourceCounter '${resource}'>>`).addClass('hudItem'))
}