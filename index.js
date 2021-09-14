const days = ['#Sunday', '#Monday', '#Tuesday', '#Wednesday', '#Thursday', '#Friday', '#Saturday'];
let today = days[new Date().getDay()];
let tomorrow = days[(new Date().getDay() + 1)%7]

$(today).css('display', 'block');
$(today).nextUntil(tomorrow).css('display', 'block');

let allDisplayed = false;
$('.active').on('click', function () {
    if(allDisplayed){
        $('.list-group-item').css('display', 'none');
        $(today).css('display', 'block');
        $(today).nextUntil(tomorrow).css('display', 'block');
        allDisplayed = false;
    } else {
        $('.list-group-item').css('display', 'block');
        allDisplayed = true;
    }
});
