export function showHUD() {
    let $container = $('<div/>').attr('id','hud')
    $container.append($('<span/>').wiki('Pop: <<golemPopCounter>>').addClass('hudItem'))
    // $container.append($('<span/>').wiki('Tier 1: <<tierOneResourceCounter>>').addClass('hudItem'))
    $container.append($('<span/>').wiki('Tier 1: <<tierOneResourceCounter>>').addClass('hudItem'))
    $('#passages').before($container)
}