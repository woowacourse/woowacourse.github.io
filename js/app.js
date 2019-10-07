const COMING_SOON_APP = (() => {
    const randomizeBackgroundUrl = () => {
        const randomNum = Math.floor(Math.random() * 4)
        const bgUrl = `/images/bg/${randomNum}.jpeg`
        $('#main-bg').css('background-image', `url('${bgUrl}')`)
    }

    const setCountdown = () => {
        $(".countdown").countdownTimer({
            endTime: new Date("October 14, 2019 15:00:00 UTC+0900")
        })
    }

    const countdown = () => {
        $.fn.countdownTimer = (options) => {
            const settings = $.extend({
                endTime: new Date()
            }, options )

            const $this = $(this)

            const $seconds = $this.find(".time.seconds")
            const $minutes = $this.find(".time.minutes")
            const $hours = $this.find(".time.hours")
            const $days = $this.find(".time.days")

            let seconds = 0
            let minutes = 0
            let days = 0
            let hours = 0

            const switchCountdownValue = ($obj, val) => {
                let s = val + "";
                while (s.length < 2) s = "0" + s

                if (Modernizr.cssanimations) {
                    const prev = $obj.find(".value").addClass("fadeOutDown").addClass("animated")
                    const next = $("<div class='value'>" + s + "</div>")
                    $obj.prepend(next)
                    next.addClass("fadeInDown").addClass("animated")
                    const to = setTimeout(function(){ prev.remove() }, 200)
                    prev.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
                        prev.remove();
                        clearTimeout(to);
                    });

                } else {
                    const prev = $obj.find(".value").remove();
                    const next = $("<div class='value'>" + s + "</div>");
                    $obj.prepend(next);
                }
            }

            const timerId = countdown(settings.endTime,
                (ts) => {
                    if (seconds != ts.seconds) {
                        switchCountdownValue($seconds, ts.seconds);
                        seconds = ts.seconds;
                    }
                    if (minutes != ts.minutes) {
                        switchCountdownValue($minutes, ts.minutes);
                        minutes = ts.minutes;
                    }
                    if (hours != ts.hours) {
                        switchCountdownValue($hours, ts.hours);
                        hours = ts.hours;
                    }

                    if (days != ts.days) {
                        switchCountdownValue($days, ts.days);
                        days = ts.days;
                    }
                },
                countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS);

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
