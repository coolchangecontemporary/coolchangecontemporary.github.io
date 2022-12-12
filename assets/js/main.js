$(document).ready(init);

function init() {

    // `.one()` unbinds this event listener after its first execution - 
    // so this code will only execute once
    $(document).one('click wheel keydown', function (e) {
        // Allow the link on the overlay to be clicked
        if (e.type !== 'click') {
            e.preventDefault();
        } 
        // Transition background colour
        $('.bg-primary').addClass('bg-other');

        // Hide acknowledgement
        $('.acknowledgement').addClass('hidden');

        // Add the ribbon
        $('.ribbon').removeClass('removed');
        // Begin ribbon fadein after a delay
        setTimeout(() => {
            $('.ribbon').removeClass('hidden');
        }, 1520);

        // Add the main back to the DOM
        setTimeout(() => {
            $('main').removeClass('removed');
        }, 3000);
        setTimeout(() => {
            // Make the main actually visible - this must be slightly delayed
            // (by 'a handful of milliseconds' according to MDN) otherwise it won't apply
            $('main').removeClass('hidden');
        }, 3020);
        
        setTimeout(() => {
            $('footer').removeClass('removed');
        }, 3000);
        setTimeout(() => {
            // Make the main actually visible - this must be slightly delayed
            // (by 'a handful of milliseconds' according to MDN) otherwise it won't apply
            $('footer').removeClass('hidden');
        }, 3020);
        
        // Fully remove the acknowledgement div after fadeout complete (for accessibility reasons)
        setTimeout(() => {
            $('.acknowledgement').addClass('removed');
        }, 5000);
    });
}

/*
 * Hide `selectorA` and show `selectorB`. 
 * 
 * Elements selected by `selectorB` must have the classes `removed` and `hidden`.
 */
function transitionBetween(selectorA, selectorB, showTimeMsB) {

    // 1.5-3.5s, overlay text fade out
    $(selectorA).addClass('hidden');
    // 4-4.7s, main body fades in
    setTimeout(() => {
        // Add the main back to the DOM
        $(selectorB).removeClass('removed');
    }, showTimeMsB)
    setTimeout(() => {
        // Make the main actually visible - this must be slightly delayed
        // (by 'a handful of milliseconds' according to MDN) otherwise it won't apply
        $(selectorB).removeClass('hidden');
    }, showTimeMsB + 20);
    // Fully remove the acknowledgement div (for accessibility reasons)
    setTimeout(() => {
        $(selectorA).addClass('removed');
    }, showTimeMsB + 2000);
}