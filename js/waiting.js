$(document).ready(function() {
    $(function(){
        "use strict";
        var height = $('#waiting-apply-from').height()
        if(window.innerWidth <= 480) {
            console.log(height)
            $('.google-form-container').height('725px')
            $('#waiting-apply-from').height('725px')
        } else {
            $('.google-form-container').height(`${height}px`)
        }
    });
});