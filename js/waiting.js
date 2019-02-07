$(document).ready(function() {
    $(function(){
        "use strict";
        var height = $('#waiting-apply-from').height()

        if(window.innerWidth <= 480) {
            $('.google-form-container').height('780px')
            $('#waiting-apply-from').height('780px')
        } else {
            $('.google-form-container').height(`${height}px`)
        }
    });
});