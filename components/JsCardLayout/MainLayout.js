
	console.log('in main layout script');
	var w = window.innerWidth;
    var h = window.innerHeight;
	var cardWidth_rem = 15; //135px
	var cardHeight_rem = 20;
	
	var cwperc = ((cardWidth_rem/2)*16) / window.innerWidth * 100;
	
	console.log(window.innerWidth,cwperc);
	
    var mainContainer = document.getElementById("mainContainer");
	//mainContainer.style.setProperty('background', 'lightyellow');
	mainContainer.style.setProperty('width', w+'px');
	mainContainer.style.setProperty('height', h+'px');
	//mainContainer.style.setProperty('background-color', '#000000');
	//mainContainer.style.setProperty('background-image', 'linear-gradient(#444cf7 1px, transparent 1px), linear-gradient(to right, #444cf7 1px, #ededed 1px)');
	//mainContainer.style.setProperty('background-size', `${w}px ${h}px`);
	
	//mainContainer.style.setProperty('position',  'absolute');
    //mainContainer.style.setProperty('margin-left',  50-cwperc+"%");
	//mainContainer.style.setProperty('border', '1px solid darkblue');
	//mainContainer.style.setProperty('box-sizing', 'border-box');
	//var t1 = emitRTrack('blue');
	//console.log('Should log t1 here ',t1);
	
	
	//mainContainer.appendChild(emitRGLine('blue','X',50));
	//mainContainer.appendChild(emitRGLine('red','Y',50));
	mainContainer.appendChild(emitRTrack('lightgreen','Y')); 
	mainContainer.appendChild(emitRTrack('lightblue','X'));
	
	mainContainer.appendChild(emitCardLayout(10,200,200,100,200));
	
	mainContainer.appendChild(emitUtilityContainer());
	
	//<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
	
	
	
	