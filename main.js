// slide2

(function() {

    init(); //on page load - show first slide, hidethe rest

    function init() {

        parents = document.getElementsByClassName('.slideshow-container');

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








//
// $(document).ready(function() {
//     $("#Page1").hide();
//     $(".design-container").hide();
//     $("#overlay").hide();
//
//
//
//     $(document).ready(function() {
//         $("#motion-btn").click(function() {
//             $("#Page1").toggle();
//         });
//     });
//
//     $(document).ready(function() {
//         $("#design-btn").click(function() {
//             $(".design-container").toggle();
//         });
//     });
// });








function on() {
    document.getElementById("overlay").style.display = "block";

}

function off() {
    document.getElementById("overlay").style.display = "none";
    hideOverlay()
}

function initSlide(container) {
    $(container).find('.mySlides:first').addClass('active-slide');
}


function hideOverlay() {
    document.querySelectorAll('.mySlides').forEach(function(item) {
        $(item).removeClass('active-slide');
    })
}


$(document).ready(function() {
    $('#overlay').hide();
    $('#ui').click(function() {
        $('.ui-container, #overlay').show();
        $('.ap-container, .sa-container, .atta-container').hide();
        initSlide('.ui-container')
    });

    $('#ap').click(function() {
        $('.ap-container, #overlay').show();
        $('.ui-container, .sa-container, .atta-container').hide();
    });

    $('#sa').click(function() {
        $('.sa-container, #overlay').show();
        $('.ui-container, .ap-container, .atta-container').hide();
        initSlide('.sa-container')
    });

    $('#atta').click(function() {
        $('.atta-container, #overlay').show();
        $('.ui-container, .ap-container, .sa-container').hide();
    });
});







// $('.grid').masonry({
//     itemSelector: '.grid-item',
//     columnWidth: 160
// });
