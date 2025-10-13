	console.log('in section script');
	
	function emitSection(pos_x,pos_y,width,height,sectionbg) {
	
	
	var section = document.createElement('div');
	section.style.setProperty('background',sectionbg != null ? sectionbg : 'white');
	section.style.setProperty('border','1px solid black');
	section.style.setProperty('border-radius','5px');
	section.style.setProperty('padding','none');	 
	
	section.style.setProperty('margin-top',pos_y);	 
	section.style.setProperty('margin-left',pos_x);	 
	
	section.style.setProperty('width',width);	 
	section.style.setProperty('height',height);	 
	
	return section;
	
	}