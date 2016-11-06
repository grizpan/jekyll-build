    //open interest point description
    var points = document.getElementsByClassName('cd-single-point');
    var initEl = document.getElementById('cd-start');

    initEl.addEventListener('click', startTour);
    for (var i = 0; i < points.length ; i++){
        points[i].addEventListener("click", onPointClick)
    }

    function onPointClick() {
        var selectedPoint = event.currentTarget;
        if ( event.target.tagName === 'A' ){
            if ( selectedPoint.classList.contains('is-open') ){
                selectedPoint.classList.remove('is-open');
                selectedPoint.classList.add('visited');
            }else{
                var visitedElements = selectedPoint.parentElement.querySelectorAll('.cd-single-point.is-open');
                for ( var i = 0; i < visitedElements.length; i++){
                    visitedElements[i].classList.remove('is-open');
                    visitedElements[i].classList.add('visited');
                }
                selectedPoint.classList.add('is-open')
            }
            return false;
        }else{
            return false;
        };
    }

    function startTour() {
        event.preventDefault();
        var mq = window.getComputedStyle(document.querySelector('.cd-product-intro'), '::before').getPropertyValue('content').replace(/"/g, "").replace(/'/g, "");
        var section = document.getElementsByClassName('cd-product')[0];
        if(mq != 'mobile') {
            section.classList.add('is-product-tour');
            section.addEventListener('transitionend', startTourWrapper);
        }

        function startTourWrapper() {
            var pointsContainer = section.getElementsByClassName('cd-points-container')[0];
            section.getElementsByClassName('cd-close-product-tour')[0].classList.add('visible');
            pointsContainer.classList.add('points-enlarge');
            pointsContainer.addEventListener('animationend', startPointsContainer);
            function startPointsContainer() {
                pointsContainer.classList.add('points-pulsing');
                pointsContainer.removeEventListener('animationend', startPointsContainer);
            }
            section.removeEventListener('transitionend', startTourWrapper);
        }

    }


    // //on desktop, switch from product intro div to product mockup div
    // $('#cd-start').on('click', function(event){
    //     event.preventDefault();
    //     //detect the CSS media query using .cd-product-intro::before content value
    //     var mq = window.getComputedStyle(document.querySelector('.cd-product-intro'), '::before').getPropertyValue('content').replace(/"/g, "").replace(/'/g, "");
    //     if(mq == 'mobile') {
    //         $('body,html').animate({'scrollTop': $($(this).attr('href')).offset().top }, 200);
    //     } else {
    //         $('.cd-product').addClass('is-product-tour').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
    //             $('.cd-close-product-tour').addClass('is-visible');
    //             $('.cd-points-container').addClass('points-enlarged').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
    //                 $(this).addClass('points-pulsing');
    //             });
    //         });
    //     }
    // });

    //on desktop, switch from product mockup div to product intro div
    $('.cd-close-product-tour').on('click', function(){
        $('.cd-product').removeClass('is-product-tour');
        $('.cd-close-product-tour').removeClass('is-visible');
        $('.cd-points-container').removeClass('points-enlarged points-pulsing');
    });


