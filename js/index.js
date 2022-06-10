// variables générales
const thMinWidth = 320; // détermine la largeur minimum
const heightRatio = 1.77778; // le ratio par lequel la hauteur est divisé. 1.77778 correspond à du 16:9 (1.77778:1)

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
    let frameHeight = frameWidth/heightRatio;
    
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
