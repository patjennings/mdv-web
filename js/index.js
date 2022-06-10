// variables générales
const thMinWidth = 320;

(function(window){
    window.onload = function(e){
	resizeGallery();
	clickHandler();
    }

    window.onresize = function(e){
	resizeGallery();
    }
})(window);

function init(){
    const overlay = document.querySelectorAll('.overlay');

    [...overlay].forEach(elem => {
	elem.setAttribute('style', 'opacity:0;');
    });
}

function resizeGallery(){
    let totalWidth = document.getElementById('container').clientWidth;
    let ratio = Math.floor(totalWidth/thMinWidth);

    let frameWidth = totalWidth/ratio;
    let frameHeight = frameWidth/1.77778;
    
    const frame = document.querySelectorAll('.frame');

    [...frame].forEach(elem => {
	elem.setAttribute('style', 'width:'+frameWidth+'px; height:'+frameHeight+'px;')
    });
}

function clickHandler(){
    const frame = document.querySelectorAll('.frame');

    [...frame].forEach(elem => {
	elem.addEventListener('click', function(e){
	    console.log(elem);
	});
	elem.addEventListener('mouseover', function(e){
	    [...frame].forEach(elem => {
		elem.setAttribute('class', 'frame');
	    })
	    elem.setAttribute('class', 'frame hover');
	});
    });
}
