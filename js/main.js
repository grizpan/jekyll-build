
// HEADER
document.addEventListener('DOMContentLoaded', documentReady);

// BAFFLE.MIN
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.baffle=e():t.baffle=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var i=n(2),o=r(i);t.exports=o["default"]},function(t,e){"use strict";function n(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function r(t,e){return t.split("").map(e).join("")}function i(t){return t[Math.floor(Math.random()*t.length)]}function o(t,e){for(var n=0,r=t.length;n<r;n++)e(t[n],n)}function u(t){return t.map(function(t,e){return!!t&&e}).filter(function(t){return t!==!1})}function s(t){return"string"==typeof t?[].slice.call(document.querySelectorAll(t)):[NodeList,HTMLCollection].some(function(e){return t instanceof e})?[].slice.call(t):t.nodeType?[t]:t}Object.defineProperty(e,"__esModule",{value:!0}),e.extend=n,e.mapString=r,e.sample=i,e.each=o,e.getTruthyIndices=u,e.getElements=s},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),u=n(3),s=r(u),c={characters:"AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz~!@#$%^&*()-+=[]{}|;:,./<>?",exclude:[" "],speed:50},a=function(){function t(e,n){i(this,t),this.options=(0,o.extend)(Object.create(c),n),this.elements=(0,o.getElements)(e).map(s["default"]),this.running=!1}return t.prototype.once=function(){var t=this;return(0,o.each)(this.elements,function(e){return e.write(t.options.characters,t.options.exclude)}),this.running=!0,this},t.prototype.start=function(){var t=this;return clearInterval(this.interval),(0,o.each)(this.elements,function(t){return t.init()}),this.interval=setInterval(function(){return t.once()},this.options.speed),this.running=!0,this},t.prototype.stop=function(){return clearInterval(this.interval),this.running=!1,this},t.prototype.set=function(t){return(0,o.extend)(this.options,t),this.running&&this.start(),this},t.prototype.text=function(t){var e=this;return(0,o.each)(this.elements,function(n){n.text(t(n.value)),e.running||n.write()}),this},t.prototype.reveal=function(){var t=this,e=arguments.length<=0||void 0===arguments[0]?0:arguments[0],n=arguments.length<=1||void 0===arguments[1]?0:arguments[1],r=e/this.options.speed||1,i=function(){clearInterval(t.interval),t.running=!0,t.interval=setInterval(function(){var e=t.elements.filter(function(t){return!t.bitmap.every(function(t){return!t})});(0,o.each)(e,function(e){var n=Math.ceil(e.value.length/r);e.decay(n).write(t.options.characters,t.options.exclude)}),e.length||(t.stop(),(0,o.each)(t.elements,function(t){return t.init()}))},t.options.speed)};return setTimeout(i,n),this},t}();e["default"]=function(t,e){return new a(t,e)}},function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var u=n(1),s=function(){function t(e){o(this,t),this.value=e,this.init()}return t.prototype.init=function(){return this.bitmap=this.value.split("").map(function(){return 1}),this},t.prototype.render=function(){var t=this,e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],n=arguments.length<=1||void 0===arguments[1]?[]:arguments[1];return e.length?(0,u.mapString)(this.value,function(r,i){return n.indexOf(r)>-1?r:t.bitmap[i]?(0,u.sample)(e):r}):this.value},t.prototype.decay=function(){for(var t=arguments.length<=0||void 0===arguments[0]?1:arguments[0];t--;){var e=(0,u.getTruthyIndices)(this.bitmap);this.bitmap[(0,u.sample)(e)]=0}return this},t.prototype.text=function(){var t=arguments.length<=0||void 0===arguments[0]?this.value:arguments[0];return this.value=t,this.init(),this},t}(),c=function(t){function e(n){o(this,e);var i=r(this,t.call(this,n.textContent));return i.element=n,i}return i(e,t),e.prototype.write=function(t,e){return this.element.textContent=this.render(t,e),this},e}(s);e["default"]=function(t){return new c(t)}}])});

var characters = ["█", "▓", "▒", "░", "█", "▓", "▒", "░", "█", "▓", "▒", "░", "<", ">", "/"];

function documentReady() {
    var header = document.getElementById('header')
    var headerMain = document.getElementById('headerMain');
    var baffleIt = header.getElementsByClassName('baffle-it');

    setTimeout(function () {
        headerMain.classList.remove('state__init');
        baffle(baffleIt, {
            characters: characters
        }).start().reveal(1000, 1000);
    }, 2000);
    setTimeout(function () {
        header.getElementsByTagName('h1')[0].classList.remove('state__init');
        header.getElementsByTagName('h3')[0].classList.remove('state__init');
    }, 3000);


    var hireBtn = document.getElementById('hireBtn');
    var b = baffle(hireBtn, {
        characters: characters
    });
    b.text(reverseTxt);
    hireBtn.addEventListener('mouseenter', enterHireBtn);
    hireBtn.addEventListener('mouseleave', leaveHireBtn);

    function enterHireBtn() {
        event.preventDefault();
        b.start()
        b.text(reverseTxt);
        b.reveal(500);
    }
    function leaveHireBtn() {
        event.preventDefault();
        b.start()
        b.text(reverseTxt);
        b.reveal(500);
    }
    function reverseTxt(e) {
        return e.split("").reverse().join("")
    }

// SKILLS
    var skills = document.getElementById('skills');
    var skillsImgWrap = document.getElementById('skillsImgWrap');
    var skillsImg = document.getElementById('skillsImg');

    var firstSrc = skillsImg.dataset.src1;
    var secSrc = skillsImg.dataset.src2;
    var thirdSrc = skillsImg.dataset.src3;

    window.addEventListener('scroll', onScroll);
    function onScroll() {
        var fixedStart = ( skills.getBoundingClientRect().top + pageYOffset - skillsImgWrap.offsetHeight );
        var fixedFinish = ( skills.getBoundingClientRect().bottom + pageYOffset - document.documentElement.clientHeight );
        var firstPoint = fixedStart + ( fixedFinish - fixedStart )/3;
        var secPoint = fixedStart + 2*( fixedFinish - fixedStart )/3;

        if( pageYOffset > fixedStart && pageYOffset < fixedFinish ){
            skillsImgWrap.style.position = "fixed";
            skillsImgWrap.style.top = "auto";
            skillsImgWrap.style.bottom = 0;
            watchImg(firstPoint, secPoint);
        }else if( pageYOffset < fixedStart ){
            skillsImgWrap.style.position = "";
            skillsImgWrap.style.top = 0;
            skillsImgWrap.style.bottom = "auto";
        }else if( pageYOffset > fixedFinish ){
            skillsImgWrap.style.position = "";
            skillsImgWrap.style.top = "auto";
            skillsImgWrap.style.bottom = 0;
        }
    }
    function watchImg(firstPoint, secPoint) {
        if( pageYOffset < firstPoint ){
            skillsImg.src = firstSrc;
        }else if( pageYOffset < secPoint ){
            skillsImg.src = secSrc;
        }else{
            skillsImg.src = thirdSrc;
        }
    }


}


var works = document.getElementById('works');
var workItems = works.getElementsByClassName('works__item');

for(var i = 0; i < workItems.length ; i++){
    workItems[i].addEventListener('mouseenter', workEnter);
    workItems[i].addEventListener('mouseleave', workLeave);
}
function workEnter() {
    
}
function workLeave() {
    
}



    // //open interest point description
    // var points = document.getElementsByClassName('cd-single-point');
    // var initEl = document.getElementById('cd-start');
    // var section = document.getElementsByClassName('cd-product')[0];
    // var closeTourEl = document.getElementsByClassName('cd-close-product-tour')[0];
    // var pointsContainer = section.getElementsByClassName('cd-points-container')[0];
    //
    // initEl.addEventListener('click', startTour);
    // closeTourEl.addEventListener('click', closeTour);
    // for (var i = 0; i < points.length ; i++){
    //     points[i].addEventListener("click", onPointClick)
    // }
    //
    // function onPointClick() {
    //     var selectedPoint = event.currentTarget;
    //     if ( event.target.tagName === 'A' ){
    //         if ( selectedPoint.classList.contains('is-open') ){
    //             selectedPoint.classList.remove('is-open');
    //             selectedPoint.classList.add('visited');
    //         }else{
    //             var visitedElements = selectedPoint.parentElement.querySelectorAll('.cd-single-point.is-open');
    //             for ( var i = 0; i < visitedElements.length; i++){
    //                 visitedElements[i].classList.remove('is-open');
    //                 visitedElements[i].classList.add('visited');
    //             }
    //             selectedPoint.classList.add('is-open')
    //         }
    //         return false;
    //     }else{
    //         return false;
    //     };
    // }
    //
    // function startTour() {
    //     event.preventDefault();
    //     var mq = window.getComputedStyle(document.querySelector('.cd-product-intro'), '::before').getPropertyValue('content').replace(/"/g, "").replace(/'/g, "");
    //
    //     if(mq != 'mobile') {
    //         section.classList.add('is-product-tour');
    //         section.addEventListener('transitionend', startTourWrapper);
    //     }
    //
    //     function startTourWrapper() {
    //         closeTourEl.classList.add('is-visible');
    //         pointsContainer.classList.add('points-enlarged');
    //         pointsContainer.addEventListener('animationend', startPointsContainer);
    //
    //         function startPointsContainer() {
    //             pointsContainer.classList.add('points-pulsing');
    //             pointsContainer.removeEventListener('animationend', startPointsContainer);
    //         }
    //
    //         section.removeEventListener('transitionend', startTourWrapper);
    //     }
    //
    // }
    //
    // function closeTour() {
    //     section.classList.remove('is-product-tour');
    //     closeTourEl.classList.remove('is-visible');
    //     pointsContainer.classList.remove('points-enlarged');
    //     pointsContainer.classList.remove('points-pulsing');
    // }
