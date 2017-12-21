


// anchor scroll effect
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var trigger = this;
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          window.location.href = trigger.href;
        });
      }
    }
  });




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




