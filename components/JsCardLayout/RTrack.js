	console.log('in rtrack script');
	
	function emitRTrack(trackbg,orientation) {
	var w = window.innerWidth;
    	var h = window.innerHeight;
	
	//var rtrack = document.querySelector('.rtrack');
	var rtrack = document.createElement('div');
	rtrack.style.setProperty('background',trackbg);
	
	//rtrack.style.setProperty('display', 'grid');
	//rtrack.style.setProperty('grid-template-columns', '1fr');
	//rtrack.style.setProperty('display', 'flex');

	rtrack.style.setProperty('border', '1px solid #606060');	
	console.log('orient'+orientation);
	
	if(orientation === 'X'){
	rtrack.style.setProperty('margin', '5rem 5%');
	//rtrack.style.setProperty('width',w+'px');
	rtrack.style.setProperty('width','90%');
	rtrack.style.setProperty('height','20px');	
	rtrack.style.setProperty('display', 'inline block');
	} else if(orientation === 'Y'){
	rtrack.style.setProperty('margin', '5% 5rem');
	//rtrack.style.setProperty('height',h+'px');
	rtrack.style.setProperty('height','80%');
	rtrack.style.setProperty('width','20px');		
	rtrack.style.setProperty('display', 'block');
	}  
	
	//rtrack.style.setProperty('justify-content', 'end');
	rtrack.style.setProperty('position', 'absolute');
	rtrack.style.setProperty('padding', '4px');
	//rtrack.style.setProperty('vertical-align', 'middle');
	
	var rtrackWidth = 0.98*w;
	var tbitwidth = 30;
	
	//var sections = rtrackWidth % tbitwidth;
	
	var rpts = rtrackWidth / tbitwidth;//eg 16;
	
	console.log('rpts',rpts);
	
	var initCMarg = rtrackWidth/rpts;
	var cmarg = 0;
	console.log('cmarg',cmarg);
	
	for(var i=0; i<rpts-4; i++){
	
	var rtik = document.createElement('div');
	
	
	//rtik.style.setProperty('margin-top',25+'%');
	rtik.style.setProperty('background','black');
	
	if(orientation == 'X'){
	rtik.style.setProperty('margin-left',cmarg+'px');	
	rtik.style.setProperty('width','0.1px');
	rtik.style.setProperty('height',i%2 == 0 ? '8' : '16'+ 'px');
	} else if(orientation == 'Y'){
	rtik.style.setProperty('margin-top',cmarg+'px');	
	rtik.style.setProperty('height','0.1px');
	rtik.style.setProperty('width',i%2 == 0 ? '8' : '16'+ 'px');	
	}
	
	rtik.style.setProperty('border', '1px solid black');
	rtik.style.setProperty('position', 'absolute');
	
	rtrack.appendChild(rtik);
	
	cmarg += initCMarg;
	}
	
	return rtrack;
	}
	
	console.log('end of rtrack script');