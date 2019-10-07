const COMING_SOON_APP = (() => {
    const randomizeBackgroundUrl = () => {
        const randomNum = Math.floor(Math.random() * 4)
        const bgUrl = `/images/bg/${randomNum}.jpeg`
        $('#main-bg').css('background-image', `url('${bgUrl}')`);
    }

    const setCountdown = () => {
        $(".countdown").countdownTimer({
            endTime: new Date("October 14, 2019 15:00:00 UTC+0900")
        })
    }

    const countdown = () => {
        $.fn.countdownTimer = function( options ) {


            // This is the easiest way to have default options.
            var settings = $.extend({
                endTime: new Date()
            }, options );

            var $this = $(this);

            var $seconds = $this.find(".time.seconds");
            var $minutes = $this.find(".time.minutes");
            var $hours = $this.find(".time.hours");
            var $days = $this.find(".time.days");

            var seconds = 0;
            var minutes = 0;
            var days = 0;
            var hours = 0;

            var switchCountdownValue = function ($obj, val) {
                // Add leading zero
                var s = val+"";
                while (s.length < 2) s = "0" + s;

                if(Modernizr.cssanimations) {
                    // Fade out previous
                    var prev = $obj.find(".value").addClass("fadeOutDown").addClass("animated");

                    // Add next value
                    var next = $("<div class='value'>" + s + "</div>");
                    $obj.prepend(next);
                    // Fade in next value
                    next.addClass("fadeInDown").addClass("animated");
                    // Remove from DOM on animation end
                    // Fix for Safari (if window is not active, then webkitAnimationEnd doesn't fire, so delete it on timeout)
                    var to = setTimeout(function(){ prev.remove() }, 200);
                    prev.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                        prev.remove();
                        clearTimeout(to);
                    });

                } else {
                    // Remove previous value
                    var prev = $obj.find(".value").remove();
                    // Add next value
                    var next = $("<div class='value'>" + s + "</div>");
                    $obj.prepend(next);
                }
            }

            var timerId = countdown(settings.endTime,
                function(ts) {
                    if(seconds != ts.seconds) {
                        switchCountdownValue($seconds, ts.seconds);
                        seconds = ts.seconds;
                    }
                    if(minutes != ts.minutes) {
                        switchCountdownValue($minutes, ts.minutes);
                        minutes = ts.minutes;
                    }
                    if(hours != ts.hours) {
                        switchCountdownValue($hours, ts.hours);
                        hours = ts.hours;
                    }

                    if(days != ts.days) {
                        switchCountdownValue($days, ts.days);
                        days = ts.days;
                    }
                },
                countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS);


            return this;

        };
    }

    const init = () => {
        randomizeBackgroundUrl()
        setCountdown()
        countdown()
    }

    return {
        init: init
    }
})()

COMING_SOON_APP.init()
