export function showGUI() {
    let $container = $('<div/>').attr('id','hud').css({'z-index': '1000', 'max-width':'54em', 'margin':'0 auto', 'top':'0px', 'position':'sticky', 'background':'#111', 'height':'50px', 'border':'solid', 'border-top':'none'}).wiki('Pop: <<golemPopCounter>>')

    $('#passages').before($container)
}