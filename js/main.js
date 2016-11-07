
// HEADER
document.addEventListener('DOMContentLoaded', documentReady);
function documentReady() {
    var headerMain = document.getElementById('headerMain');
    var headerName = headerMain.getElementsByTagName('h1')[0];
    var headerCV = headerMain.getElementsByTagName('h3')[0];

    setTimeout(function () {
        headerMain.classList.remove('state__init');
        goLeft(headerName);
        goLeft(headerCV);
    }, 1000);

    function goLeft(el) {
        console.log(el.offsetParent)
        el.style.position = 'absolute';
        //el.style.left = 0;
    }

    document.removeEventListener('DOMContentLoaded', documentReady);
}

    //open interest point description
    var points = document.getElementsByClassName('cd-single-point');
    var initEl = document.getElementById('cd-start');
    var section = document.getElementsByClassName('cd-product')[0];
    var closeTourEl = document.getElementsByClassName('cd-close-product-tour')[0];
    var pointsContainer = section.getElementsByClassName('cd-points-container')[0];

    initEl.addEventListener('click', startTour);
    closeTourEl.addEventListener('click', closeTour);
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

        if(mq != 'mobile') {
            section.classList.add('is-product-tour');
            section.addEventListener('transitionend', startTourWrapper);
        }

        function startTourWrapper() {
            closeTourEl.classList.add('is-visible');
            pointsContainer.classList.add('points-enlarged');
            pointsContainer.addEventListener('animationend', startPointsContainer);

            function startPointsContainer() {
                pointsContainer.classList.add('points-pulsing');
                pointsContainer.removeEventListener('animationend', startPointsContainer);
            }

            section.removeEventListener('transitionend', startTourWrapper);
        }

    }

    function closeTour() {
        section.classList.remove('is-product-tour');
        closeTourEl.classList.remove('is-visible');
        pointsContainer.classList.remove('points-enlarged');
        pointsContainer.classList.remove('points-pulsing');
    }
