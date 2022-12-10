$(document).ready(init);

function init() {

    // `.one()` unbinds this event listener after its first execution - 
    // so this code will only execute once
    // TODO lock the scrollbar until the fadeout is complete
    $('.overlay').one('click wheel', function () {
        $('.overlay').addClass('hidden');
    });
}