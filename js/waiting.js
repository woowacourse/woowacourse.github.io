$(document).ready(function() {
    $(function(){
        "use strict";
        $('#waiting-apply-from').on('load', function() {
            var height = $('#waiting-apply-from').height()
            if(window.innerWidth <= 480) {
                $('.google-form-container').height(`${height*3.3}px`)
            } else {
                $('.google-form-container').height(`${height}px`)
            }

        })
    });
});