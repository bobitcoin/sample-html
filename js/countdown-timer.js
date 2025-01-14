// Set the date we're counting down to
var countDownDate = new Date( "Oct 16, 2023 00:00:00" ).getTime();
var entrance_animation = false;
var entrance_amination_class = '';

// Update the count down every 1 second
var x = setInterval( function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor( distance / ( 1000 * 60 * 60 * 24 ) );
    var hours = Math.floor((distance % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 ) );
    var minutes = Math.floor( ( distance % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) );
    var seconds = Math.floor( ( distance % ( 1000 * 60 ) ) / 1000 );

    if( !entrance_animation )
    {
        entrance_amination_class = 'fade-in';
    }
    else
    {
        entrance_amination_class = '';
    }

    var countdown_timer_markup = '' +
        '<div class="units-of-time-wrapper ' + entrance_amination_class + '">' + 
            '<div class="time-segment unit-time segment-days">' +
                '<div id="days_unit_time" class="unit-time-number">' +
                    '<h3>' + days + '</h3>' +
                '</div>' +
                '<div class="unit-time-text">' +
                    '<h4> DAYS </h4>' +
                '</div>' +
            '</div>' +
            '<div class="time-segment unit-colon segment-colon">' +
                '<h3> : </h3>' +
            '</div>' +
            '<div class="time-segment unit-time segment-hours">' +
                '<div id="hours_unit_time" class="unit-time-number">' +
                    '<h3>' + hours + '</h3>' +
                '</div>' +
                '<div class="unit-time-text">' +
                    '<h4> HOURS </h4>' +
                '</div>' +
            '</div>' +
            '<div class="time-segment unit-colon segment-colon">' +
                '<h3> : </h3>' +
            '</div>' +
            '<div class="time-segment unit-time segment-minutes">' +
                '<div id="minutes_unit_time" class="unit-time-number">' +
                    '<h3>' + minutes + '</h3>' +
                '</div>' +
                '<div class="unit-time-text">' +
                    '<h4> MINUTES </h4>' +
                '</div>' +
            '</div>' +
            '<div class="time-segment unit-colon segment-colon">' +
                '<h3> : </h3>' +
            '</div>' +
            '<div class="time-segment unit-time segment-seconds">' +
                '<div id="seconds_unit_time" class="unit-time-number seconds-beat">' +
                    '<h3>' + seconds + '</h3>' +
                '</div>' +
                '<div class="unit-time-text">' +
                    '<h4> SECONDS</h4>' +
                '</div>' +
            '</div>' +
        '</div>';

    document.getElementById( "countdown_timer_wrapper" ).classList.remove( "loading-timer" );

    // Display the result in the element with id="demo"
    document.getElementById( "countdown_timer" ).innerHTML = countdown_timer_markup;

    console.log( "seconds", seconds );

    if( seconds === 0 )
    {
        console.log( "adding class should beat it" );
        document.getElementById( "minutes_unit_time" ).classList.add( "beat-it" );
    }
    else
    {
        document.getElementById( "minutes_unit_time" ).classList.remove( "beat-it" );
    }

    // If the count down is finished, write some text
    if( distance < 0 ) 
    {
        clearInterval(x);
        // document.getElementById("demo").innerHTML = "EXPIRED";
    }

    entrance_animation = true;
    

}, 1000 );
