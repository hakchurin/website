

// slide2

(function() {

    init(); //on page load - show first slide, hidethe rest

    function init() {

        parents = document.getElementsByClassName('slideshow-container');

        for (j = 0; j < parents.length; j++) {
            var slides = parents[j].getElementsByClassName("mySlides");
            var dots = parents[j].getElementsByClassName("dot");
            slides[0].classList.add('active-slide');
            dots[0].classList.add('active');
        }
    }

    dots = document.getElementsByClassName('dot'); //dots functionality

    for (i = 0; i < dots.length; i++) {

        dots[i].onclick = function() {

            slides = this.parentNode.parentNode.getElementsByClassName("mySlides");

            for (j = 0; j < this.parentNode.children.length; j++) {
                this.parentNode.children[j].classList.remove('active');
                slides[j].classList.remove('active-slide');
                if (this.parentNode.children[j] == this) {
                    index = j;
                }
            }
            this.classList.add('active');
            slides[index].classList.add('active-slide');

        }
    }
    //prev/next functionality
    links = document.querySelectorAll('.slideshow-container a');

    for (i = 0; i < links.length; i++) {
        links[i].onclick = function() {
            current = this.parentNode;

            var slides = current.getElementsByClassName("mySlides");
            var dots = current.getElementsByClassName("dot");
            curr_slide = current.getElementsByClassName('active-slide')[0];
            curr_dot = current.getElementsByClassName('active')[0];
            curr_slide.classList.remove('active-slide');
            curr_dot.classList.remove('active');
            if (this.className == 'next') {

                if (curr_slide.nextElementSibling.classList.contains('mySlides')) {
                    curr_slide.nextElementSibling.classList.add('active-slide');
                    curr_dot.nextElementSibling.classList.add('active');
                } else {
                    slides[0].classList.add('active-slide');
                    dots[0].classList.add('active');
                }

            }

        };
    }
})();











$(document).ready(function() {
    $("#Page1").hide();
    $("#Page2").hide();
    $("#Page3").hide();


    $(document).ready(function() {
        $("#motion-btn").click(function() {
            $("#Page1").toggle();
        });
    });

    $(document).ready(function() {
        $("#dev-btn").click(function() {
            $("#Page3").toggle();
        });
    });

    $(document).ready(function() {
        $("#design-btn").click(function() {
            $("#Page2").toggle();
        });
    });
});







$(document).ready(function() {

    //select all the a tag with name equal to modal
    $('a[name=modal]').click(function(e) {
        //Cancel the link behavior
        e.preventDefault();
        //Get the A tag
        var id = $(this).attr('href');

        //Get the screen height and width
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();

        //Set height and width to mask to fill up the whole screen
        $('#mask').css({
            'width': maskWidth,
            'height': maskHeight
        });

        //transition effect
        $('#mask').fadeIn(1000);
        $('#mask').fadeTo("slow", 0.8);

        //Get the window height and width
        var winH = $(window).height();
        var winW = $(window).width();

        //Set the popup window to center
        $(id).css('top', winH / 2 - $(id).height() / 2);
         $(id).css('left', winW / 2 - $(id).width() / 2);

        //transition effect
        $(id).fadeIn(2000);

    });




    $('.window .close').click(function(e) {
         //Cancel the link behavior
         e.preventDefault();
         $('#mask, .window').hide();
     });

     //if mask is clicked
     $('#mask').click(function() {
         $(this).hide();
         $('#mask, .window').hide();
     });

 });
