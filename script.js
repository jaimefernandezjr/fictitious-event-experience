$(function(){
    let win = $(window);
    let heading = $('.heading');
    let planetImages = $('.planet-img');
    let introText = $('.intro-text');
    let planetText = $('.planet-text');
    let clickMe = $('.click-planet-text');

    heading.hide();
    heading.fadeIn(3000);

    win.on('scroll', function(){
        console.log(win.scrollTop());
        let top = win.scrollTop();
        planetImages.css('transform', 'rotate(' + top/6 + 'deg)');

        if(top > 400 && top < 500){
            introText.animate({
                opacity: '1'
            })
        }
        if(top > 900 && top < 1000){
            $('.click-planet-text > q').text("Click the Planet!")
            clickMe.css({

                opacity: '1'
            })
        }
        if(top > 10600){
            $('.click-planet-text > q').text("We've reached the end. Thank you for visiting!");
            clickMe.css({
                opacity: '1'
            })
        }
        if(top > 10400 && top < 10600){
            clickMe.css({
                opacity: '0'
            });
        }
    });

    planetImages.on('click', function(){
        planetText.animate({
            opacity: '1'
        })

        clickMe.hide();

    })

    // planetImages.hover(function(){
    //     planetImages.animate({
    //         width: '38%',
    //         height: '38%'
    //     }, 'fast')
    // })

    planetImages.mouseleave(function(){
        planetText.css({
            opacity: '0'
        })

    //     planetImages.animate({
    //         width: '40%',
    //         heght: '40%'
    //     }, 'fast')

    })
    

   // document is ready
})