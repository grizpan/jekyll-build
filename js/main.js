
// HEADER
document.addEventListener('DOMContentLoaded', documentReady);

// BAFFLE.MIN
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.baffle=e():t.baffle=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var i=n(2),o=r(i);t.exports=o["default"]},function(t,e){"use strict";function n(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function r(t,e){return t.split("").map(e).join("")}function i(t){return t[Math.floor(Math.random()*t.length)]}function o(t,e){for(var n=0,r=t.length;n<r;n++)e(t[n],n)}function u(t){return t.map(function(t,e){return!!t&&e}).filter(function(t){return t!==!1})}function s(t){return"string"==typeof t?[].slice.call(document.querySelectorAll(t)):[NodeList,HTMLCollection].some(function(e){return t instanceof e})?[].slice.call(t):t.nodeType?[t]:t}Object.defineProperty(e,"__esModule",{value:!0}),e.extend=n,e.mapString=r,e.sample=i,e.each=o,e.getTruthyIndices=u,e.getElements=s},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),u=n(3),s=r(u),c={characters:"AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz~!@#$%^&*()-+=[]{}|;:,./<>?",exclude:[" "],speed:50},a=function(){function t(e,n){i(this,t),this.options=(0,o.extend)(Object.create(c),n),this.elements=(0,o.getElements)(e).map(s["default"]),this.running=!1}return t.prototype.once=function(){var t=this;return(0,o.each)(this.elements,function(e){return e.write(t.options.characters,t.options.exclude)}),this.running=!0,this},t.prototype.start=function(){var t=this;return clearInterval(this.interval),(0,o.each)(this.elements,function(t){return t.init()}),this.interval=setInterval(function(){return t.once()},this.options.speed),this.running=!0,this},t.prototype.stop=function(){return clearInterval(this.interval),this.running=!1,this},t.prototype.set=function(t){return(0,o.extend)(this.options,t),this.running&&this.start(),this},t.prototype.text=function(t){var e=this;return(0,o.each)(this.elements,function(n){n.text(t(n.value)),e.running||n.write()}),this},t.prototype.reveal=function(){var t=this,e=arguments.length<=0||void 0===arguments[0]?0:arguments[0],n=arguments.length<=1||void 0===arguments[1]?0:arguments[1],r=e/this.options.speed||1,i=function(){clearInterval(t.interval),t.running=!0,t.interval=setInterval(function(){var e=t.elements.filter(function(t){return!t.bitmap.every(function(t){return!t})});(0,o.each)(e,function(e){var n=Math.ceil(e.value.length/r);e.decay(n).write(t.options.characters,t.options.exclude)}),e.length||(t.stop(),(0,o.each)(t.elements,function(t){return t.init()}))},t.options.speed)};return setTimeout(i,n),this},t}();e["default"]=function(t,e){return new a(t,e)}},function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var u=n(1),s=function(){function t(e){o(this,t),this.value=e,this.init()}return t.prototype.init=function(){return this.bitmap=this.value.split("").map(function(){return 1}),this},t.prototype.render=function(){var t=this,e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],n=arguments.length<=1||void 0===arguments[1]?[]:arguments[1];return e.length?(0,u.mapString)(this.value,function(r,i){return n.indexOf(r)>-1?r:t.bitmap[i]?(0,u.sample)(e):r}):this.value},t.prototype.decay=function(){for(var t=arguments.length<=0||void 0===arguments[0]?1:arguments[0];t--;){var e=(0,u.getTruthyIndices)(this.bitmap);this.bitmap[(0,u.sample)(e)]=0}return this},t.prototype.text=function(){var t=arguments.length<=0||void 0===arguments[0]?this.value:arguments[0];return this.value=t,this.init(),this},t}(),c=function(t){function e(n){o(this,e);var i=r(this,t.call(this,n.textContent));return i.element=n,i}return i(e,t),e.prototype.write=function(t,e){return this.element.textContent=this.render(t,e),this},e}(s);e["default"]=function(t){return new c(t)}}])});
//SCROLL TRIGGER MIN
!function(t,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof module&&module.exports?module.exports=e():t.ScrollTrigger=e()}(this,function(){"use strict";return function(t,e,n){function i(){var t=u.scrollElement.innerWidth,e=u.scrollElement.innerHeight,n=u.bindElement.scrollTop?u.bindElement.scrollTop:document.documentElement.scrollTop,l=u.bindElement.scrollLeft?u.bindElement.scrollLeft:document.documentElement.scrollLeft;a.left==l&&a.top==n||(o.forEach(function(i,r){var c=i.left(),f=i.top();a.left>l?c-=i.xOffset(!0):a.left<l&&(c+=i.xOffset(!1)),a.top>n?f-=i.yOffset(!0):a.top<n&&(f+=i.yOffset(!1)),t>c&&c>=0&&e>f&&f>=0?(i.addClass(i.visibleClass,function(){i.showCallback&&s(i,i.showCallback)}),i.removeClass(i.hiddenClass),i.once&&o.splice(r,1)):(i.addClass(i.hiddenClass),i.removeClass(i.visibleClass,function(){i.hideCallback&&s(i,i.hideCallback)}))}),r.forEach(function(i){i.call(u,l,n,t,e)}),a.left=l,a.top=n),o.length>0||r.length>0?(f=!0,c(i)):f=!1}function s(t,e){var n=e.split("("),i=n[0];n=n.length>1?n[1].split(")")[0]:void 0,window[i]&&window[i].call(t.element,n)}var l=function(t,e){this.element=e,this.defaultOptions=t,this.showCallback=null,this.hideCallback=null,this.visibleClass="visible",this.hiddenClass="invisible",this.addWidth=!1,this.addHeight=!1,this.once=!1;var n=0,i=0;this.left=function(t){return function(){return t.element.getBoundingClientRect().left}}(this),this.top=function(t){return function(){return t.element.getBoundingClientRect().top}}(this),this.xOffset=function(t){return function(e){var i=n;return t.addWidth&&!e?i+=t.width():e&&!t.addWidth&&(i-=t.width()),i}}(this),this.yOffset=function(t){return function(e){var n=i;return t.addHeight&&!e?n+=t.height():e&&!t.addHeight&&(n-=t.height()),n}}(this),this.width=function(t){return function(){return t.element.offsetWidth}}(this),this.height=function(t){return function(){return t.element.offsetHeight}}(this),this.reset=function(t){return function(){t.removeClass(t.visibleClass),t.removeClass(t.hiddenClass)}}(this),this.addClass=function(t){var e=function(e,n){t.element.classList.contains(e)||(t.element.classList.add(e),"function"==typeof n&&n())},n=function(e,n){e=e.trim();var i=new RegExp("(?:^|\\s)"+e+"(?:(\\s\\w)|$)","ig"),s=t.element.className;i.test(s)||(t.element.className+=" "+e,"function"==typeof n&&n())};return t.element.classList?e:n}(this),this.removeClass=function(t){var e=function(e,n){t.element.classList.contains(e)&&(t.element.classList.remove(e),"function"==typeof n&&n())},n=function(e,n){e=e.trim();var i=new RegExp("(?:^|\\s)"+e+"(?:(\\s\\w)|$)","ig"),s=t.element.className;i.test(s)&&(t.element.className=s.replace(i,"$1").trim(),"function"==typeof n&&n())};return t.element.classList?e:n}(this),this.init=function(t){return function(){var e=t.defaultOptions,s=t.element.getAttribute("data-scroll");e&&(e.toggle&&e.toggle.visible&&(t.visibleClass=e.toggle.visible),e.toggle&&e.toggle.hidden&&(t.hiddenClass=e.toggle.hidden),e.centerHorizontal===!0&&(n=t.element.offsetWidth/2),e.centerVertical===!0&&(i=t.element.offsetHeight/2),e.offset&&e.offset.x&&(n+=e.offset.x),e.offset&&e.offset.y&&(i+=e.offset.y),e.addWidth&&(t.addWidth=e.addWidth),e.addHeight&&(t.addHeight=e.addHeight),e.once&&(t.once=e.once));var l=s.indexOf("addWidth")>-1,o=s.indexOf("addHeight")>-1,r=s.indexOf("once")>-1;t.addWidth===!1&&l===!0&&(t.addWidth=l),t.addHeight===!1&&o===!0&&(t.addHeight=o),t.once===!1&&r===!0&&(t.once=r),t.showCallback=t.element.getAttribute("data-scroll-showCallback"),t.hideCallback=t.element.getAttribute("data-scroll-hideCallback");var a=s.split("toggle(");if(a.length>1){var c=a[1].split(")")[0].split(",");String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}),t.visibleClass=c[0].trim().replace(".",""),t.hiddenClass=c[1].trim().replace(".","")}s.indexOf("centerHorizontal")>-1&&(n=t.element.offsetWidth/2),s.indexOf("centerVertical")>-1&&(i=t.element.offsetHeight/2);var f=s.split("offset(");if(f.length>1){var d=f[1].split(")")[0].split(",");n+=parseInt(d[0].replace("px","")),i+=parseInt(d[1].replace("px",""))}return t}}(this)};this.scrollElement=window,this.bindElement=document.body;var o=[],r=[],a={left:-1,top:-1},c=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){setTimeout(t,1e3/60)},f=!1,d=function(t){return function(e,n,i){return void 0!=n&&null!=n?t.bindElement=n:t.bindElement=document.body,void 0!=i&&null!=i?t.scrollElement=i:t.scrollElement=window,t.bind(t.bindElement.querySelectorAll("[data-scroll]")),t}}(this);this.bind=function(e){return function(n){n instanceof HTMLElement&&(n=[n]);var s=[].slice.call(n);return s=s.map(function(e){var n=new l(t,e);return n.init()}),o=o.concat(s),o.length>0&&0==f?(f=!0,i()):f=!1,e}}(this),this.triggerFor=function(){return function(t){var e=null;return o.forEach(function(n){n.element==t&&(e=n)}),e}}(this),this.destroy=function(t){return function(e){return o.forEach(function(t,n){t.element==e&&o.splice(n,1)}),t}}(this),this.destroyAll=function(t){return function(){return o=[],t}}(this),this.reset=function(t){return function(e){var n=t.triggerFor(e);if(null!=n){n.reset();var i=o.indexOf(n);i>-1&&o.splice(i,1)}return t}}(this),this.resetAll=function(t){return function(){return o.forEach(function(t){t.reset()}),o=[],t}}(this),this.attach=function(t){return function(e){return r.push(e),f||(f=!0,i()),t}}(this),this.detach=function(t){return function(e){var n=r.indexOf(e);return n>-1&&r.splice(n,1),t}}(this);var u=this;return d(t,e,n)}});


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
