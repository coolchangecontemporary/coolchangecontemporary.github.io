$(document).ready(init);

function init() {

    $('.overlay').one('click wheel', function () {
        $('.overlay').addClass('hidden');
    });
}
