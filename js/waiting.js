$(document).ready(function() {
    $(function(){
        "use strict";

        if(window.innerWidth <= 480) {
            $('.google-form-container').height('780px')
            $('#waiting-apply-from').height('780px')
        } else {
            $('.google-form-container').height('800px')
        }
    });
});