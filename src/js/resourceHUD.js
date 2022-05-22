export function showHUD() {
    let $container = $('<div/>').attr('id','hud')
    $container.append($('<span/>').wiki('Pop: <<golemPopCounter>>').addClass('hudItem'))
    $container.append($('<span/>').wiki(`Basic: <<resourceCounter 'Basic'>>`).addClass('hudItem'))
    $('#passages').before($container)
}