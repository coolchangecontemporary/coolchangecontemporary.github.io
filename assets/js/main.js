$(document).ready(init);

function init() {

    // `.one()` unbinds this event listener after its first execution - 
    // so this code will only execute once
    $(document).one('click wheel keydown', function (e) {
        // Allow the link on the overlay to be clicked
        if (e.type !== 'click') {
            e.preventDefault();
        } 
        // bg color transition 0-3s
        $('.bg-primary').addClass('bg-other');
        // 1.5-3.5s, overlay text fade out
        $('.acknowledgement').addClass('hidden');
        // 4-4.7s, main body fades in
        $('main').removeClass('removed');
        setTimeout(() => {
            $('main').removeClass('hidden');
        }, 20);
        // Fully remove the acknowledgement div (for accessibility reasons)
        setTimeout(() => {
            $('.acknowledgement').addClass('removed');
        }, 5000);
    });
}
