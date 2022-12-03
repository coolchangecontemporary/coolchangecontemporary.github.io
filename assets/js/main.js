$(document).ready(function () {
    console.log("On course for a Cool Change");


    $('html').onclick(function (e) {
        e.preventDefault();
        $('.overlay').addClass('hidden');
    });

    function hideOverlay() {
        $('.overlay').addClass('hidden');
    }

    $('.overlay').on('click scroll', function () {
        this.addClass('hidden');
        this.off('click scroll');
    });
});