$(document).ready(function () {
    var elem1 = 'div.slider ul li.slideritem:first-child',
        elem2 = 'div.slider ul li.slideritem:nth-child(2)',
        elem3 = 'div.slider ul li.slideritem:last-child',
        count = 0,
        TimerId = setInterval(name, 2000),
        height = $('div.slider ul li.slideritem img').height(),
        heightMiddle = height + 50;
    $(elem1).css('left', '0%');
    $(elem2).css('left', '40%');
    $(elem3).css('left', '80%');
    function name() {
        height = resizeWidth();
        heightMiddle = height + 50;
        count += 40;
        if (count > 80) count = 0;
        if (count == 0) {
            $(elem1).css('left', 0+'%');
            $(elem1+' img').css('height', height);
            $(elem2).css('left', 40+'%');
            $(elem2+' img').css('height', heightMiddle);
            $(elem3).css('left', 80+'%');
            $(elem3+' img').css('height', height);
        } else if(count == 40) {
            $(elem2).css('left', 0+'%');
            $(elem2+' img').css('height', height);
            $(elem3).css('left', 40+'%');
            $(elem3+' img').css('height', heightMiddle);
            $(elem1).css('left', 80+'%');
            $(elem1+' img').css('height', height);
        } else if (count == 80) {
            $(elem3).css('left', 0+'%');
            $(elem3+' img').css('height', height);
            $(elem1).css('left', 40+'%');
            $(elem1+' img').css('height', heightMiddle);
            $(elem2).css('left', 80+'%');
            $(elem2+' img').css('height', height);
        }
    }
    $('div.page1 div.slider div.prev-arrow').click(function (){ 
        height = resizeWidth();
        heightMiddle = height + 50;
        clearInterval(TimerId);
        count += 40;
        if (count > 80) count = 0;
        if (count == 0) {
            $(elem1).css('left', 0+'%');
            $(elem1+' img').css('height', height);
            $(elem2).css('left', 40+'%');
            $(elem2+' img').css('height', heightMiddle);
            $(elem3).css('left', 80+'%');
            $(elem3+' img').css('height', height);
        } else if(count == 40) {
            $(elem2).css('left', 0+'%');
            $(elem2+' img').css('height', height);
            $(elem3).css('left', 40+'%');
            $(elem3+' img').css('height', heightMiddle);
            $(elem1).css('left', 80+'%');
            $(elem1+' img').css('height', height);
        } else if (count == 80) {
            $(elem3).css('left', 0+'%');
            $(elem3+' img').css('height', height);
            $(elem1).css('left', 40+'%');
            $(elem1+' img').css('height', heightMiddle);
            $(elem2).css('left', 80+'%');
            $(elem2+' img').css('height', height);
        }

    });
    $('div.page1 div.slider div.next-arrow').click(function(){ 
        height = resizeWidth();
        heightMiddle = height + 50;
        clearInterval(TimerId);
        count -= 40;
        if (count < 0) count = 80;
        if (count == 0) {
            $(elem1).css('left', 0+'%');
            $(elem1+' img').css('height', height);
            $(elem2).css('left', 40+'%');
            $(elem2+' img').css('height', heightMiddle);
            $(elem3).css('left', 80+'%');
            $(elem3+' img').css('height', height);
        } else if(count == 40) {
            $(elem2).css('left', 0+'%');
            $(elem2+' img').css('height', height);
            $(elem3).css('left', 40+'%');
            $(elem3+' img').css('height', heightMiddle);
            $(elem1).css('left', 80+'%');
            $(elem1+' img').css('height', height);
        } else if (count == 80) {
            $(elem3).css('left', 0+'%');
            $(elem3+' img').css('height', height);
            $(elem1).css('left', 40+'%');
            $(elem1+' img').css('height', heightMiddle);
            $(elem2).css('left', 80+'%');
            $(elem2+' img').css('height', height);
        }
        

    });
    function resizeWidth() {
            if($('.slider').width() < 520) {
                return 100;
            } else if($('.slider').width() < 700) {
                return 100;
            } else if($('.slider').width() < 883) {
               return 150;
            } else if($('.slider').width() < 1020) {
               return 250;
            } else if($('.slider').width() > 1020) {
                return 350;
            } 
        }
    $('.background0').width();
    if($('.background0').width() > 600) {
    $('.parallax-window').parallax({imageSrc: 'images/background0.png'});
    } else {
        $('.background0').css({'background':'url(images/background0.png)', 'background-size': 'cover'});
}
        $('.toggle-menu').click(function() {
        $('ul.hormenu').toggle('slow');
    });
});