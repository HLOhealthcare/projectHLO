


// Spotlight effect
$('.searchlight')
    .on('mousemove', function(event) {
        $(this).addClass('on').css({'margin-left': event.pageX - 150, 'margin-top': event.pageY - 150});
    })
    .on('mouseout', function(event) {
        $(this).removeClass('on');
    })
    .on('click', function() {
        $(this).fadeOut(function() {
            $(this).remove();
        });
    });





// fancyBox v3.2
$('#test').on('click',function() {
    
    $.fancybox.open([
        {
            src: '../../healthcarelib/images/a1.jpg',
            opts: {
                caption: 'First caption',
                thumb: '../../healthcarelib/images/a1.jpg'
            }
        },
        {
            src: './images/a2.jpg',
            opts: {
                caption: 'Second caption',
                thumb: './images/a2.jpg'
            }
        },
        {
            src: './images/a3.jpg',
            opts: {
                caption: 'Third caption',
                thumb: './images/a3.jpg'
            }
        }
    ], {
        loop: true,
        hash: 'test'
    });

});




