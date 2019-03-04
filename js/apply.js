var index = 0;
function formLoaded() {
    window.scroll(0,0);
    var formContainer = $('.google-form-container')
    if(window.innerWidth <= 480) {
        switch(index) {
            case 0:
                formContainer.height('780px');
                index++;
                break;
            case 1:
                formContainer.height('2150px');
                index++;
                break;
            case 2:
                formContainer.height('350px');
                index = 0.
                break;
            default:
        }
    } else {
        switch(index) {
            case 0:
                formContainer.height('780px');
                index++;
                break;
            case 1:
                formContainer.height('1850px');
                index++;
                break;
            case 2:
                formContainer.height('350px');
                index = 0;
                break;
            default:
        }
    }
}