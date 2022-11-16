import { logger } from "@util/Logging"

Macro.add('deskList', {
    skipArgs: false,
    handler: function () {
        $('<div/>').addClass('desk-list')
            .append(createListButton('construction'))
            .append(createListButton('interact'))
            .wiki(`<<startEvent 'Pickup Kobold' 1>>`)
            // .append(`<<startEvent 'Pickup Kobold' 1>>`)
            // .append($('<button/>').wiki('Pickup Kobold').click(()=>{
            //     $.wiki(`<<startEvent "Pickup Kobold">>`)
            // }))
            // .append(createListButton('command'))
            .appendTo(this.output)
    }
})

function createListButton(name) {
    let $btn = $('<button/>').attr('id', name).wiki(_.upperFirst(name))
    let panelId = `desk-${name}`

    $btn.click(() => {
        selectPanel(panelId)
    })

    return $btn
}

function clearPanels() {
    $('#desk-construction').removeClass('desk-visable')
    $('#desk-interact').removeClass('desk-visable')
    $('#desk-command').removeClass('desk-visable')
    $('#desk-empty').removeClass('desk-visable')
}

function selectPanel(panelId) {
    let activeId = $('.desk-visable').attr('id')
    clearPanels()
    if (panelId !== activeId)
        $(`#${panelId}`).addClass('desk-visable')
    else
        $(`#desk-empty`).addClass('desk-visable')
}