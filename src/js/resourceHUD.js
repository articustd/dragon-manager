export function showHUD() {
    let $container = $('<div/>').attr('id','hud')
    $container.append($('<div/>').wiki(`''Golem''<<golemPopCounter>>`).addClass('hudItem'))
    $container.append($('<div/>').wiki(`<<manaBar>>''Mana''<</manaBar>>`).addClass('hudItem'))
    $container.append($('<span/>').wiki(`''Basic''<<resourceCounter 'Basic'>>`).addClass('hudItem'))
    $('#passages').before($container)
}