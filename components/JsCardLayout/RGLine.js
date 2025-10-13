	console.log('in rgline script');
	
	function emitRGLine(linebg,orientation,offset) {
	var w = window.innerWidth;
    var h = window.innerHeight;
	
	console.log('w',w,'h',h);
	
	//var rline = document.querySelector('.rline');
	var rline = document.createElement('div');
	rline.style.setProperty('background',linebg);
	console.log('orient'+orientation);
	
	rline.style.setProperty('padding','none');	 
	
	if(orientation === 'X'){
			
	var offset_PX =  w * offset/100;	console.log('offset_PX',offset_PX);
	rline.style.setProperty('margin-top', offset_PX+'px');
	rline.style.setProperty('width',w+'px');
	rline.style.setProperty('height','1px');	
	rline.style.setProperty('display', 'inline block');
	
	} else if(orientation === 'Y'){
		
	var offset_PX =  h * offset/100;		console.log('offset_PX',offset_PX);
	rline.style.setProperty('margin-left', offset_PX+'px');
	rline.style.setProperty('height',h+'px');
	rline.style.setProperty('width','1px');		
	rline.style.setProperty('display', 'block');
	}  
	
	
	rline.style.setProperty('position', 'absolute');
	//rline.style.setProperty('padding', '4px');
	//rline.style.setProperty('vertical-align', 'middle');

	return rline;
	}
	
	console.log('end of rline script');