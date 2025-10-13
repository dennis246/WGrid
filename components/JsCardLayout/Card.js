	console.log('in rgline script');
	
	function emitCard(pos_x,pos_y,width,height,bg,content) {
	
	var card = document.createElement('div');
	
	card.style.setProperty('background',bg);
	card.style.setProperty('opacity','0.5');
	card.style.setProperty('position','absolute');	 
	card.style.setProperty('perspective', '650px');
	card.style.setProperty('transform','transform: rotateY(180deg) translateZ(50px)');
	card.style.setProperty('perspective-origin', '150% 150%');
	card.style.setProperty('transform-style', 'preserve-3d');
	card.style.setProperty('backface-visibility', 'visible');
	//card.style.setProperty('perspective-origin', '150% 150%');
	
	if(pos_x === null){
	card.style.setProperty('margin','10px');	 
	} else {
	card.style.setProperty('margin', `-${pos_x}px ${pos_y}px`);	 
	}
	
	card.style.setProperty('padding','2px');	  
	card.style.setProperty('width',width+'rem');	 
	card.style.setProperty('height',height+'rem');
	card.style.setProperty('border','1px solid #FFFF00');
	
	card.style.setProperty('display','flex');
	card.style.setProperty('justify-content','center');
	card.style.setProperty('vertical-align','middle');
	//card.style.setProperty('border-radius','15px');	
	card.appendChild(addCardContent(content));
	
	return card;
	
	}
	
	
	
	function emitCard(cardMap) {
		
		var card = document.createElement('div');
		
	card.style.setProperty('background',cardMap.get('bg'));
	card.style.setProperty('opacity','0.5');
	
		 
	
	if(cardMap.get('cardsArrangement') === 'cascade'){
	card.style.setProperty('position','absolute');	 
	card.style.setProperty('margin', `-${cardMap.get('posOffset_X')}px ${cardMap.get('posOffset_Y')}px`);
	} else {
		card.style.setProperty('position','relative');	 
		card.style.setProperty('margin', `10px auto`);
		//card.style.setProperty('top', `20px`);
	}
	
	card.style.setProperty('perspective', '650px');
	card.style.setProperty('transform','transform: rotateY(180deg) translateZ(50px)');
	card.style.setProperty('perspective-origin', '150% 150%');
	card.style.setProperty('transform-style', 'preserve-3d');
	card.style.setProperty('backface-visibility', 'visible');
	//card.style.setProperty('perspective-origin', '150% 150%');
	
	/*
	if(pos_x === null){
	card.style.setProperty('margin','10px');	 
	} else {
	card.style.setProperty('margin', `-${cardMap.get('posOffset_X')}px ${cardMap.get('posOffset_Y')}px`);	 
	}*/
	
	
	
	card.style.setProperty('padding','2px');	  
	card.style.setProperty('width',cardMap.get('width')+'rem');	 
	card.style.setProperty('height',cardMap.get('height')+'rem');
	card.style.setProperty('border','1px solid #FFFF00');
	
	card.style.setProperty('display','flex');
	card.style.setProperty('justify-content','center');
	card.style.setProperty('vertical-align','middle');
	//card.style.setProperty('border-radius','15px');	
	card.appendChild(addCardContent(cardMap.get('content')));
		
		
		
		
		
		return card;
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function addCardContent(content) {
		
	var cc = document.createElement('div');
	cc.innerHTML = content;
	//cc.style.setProperty('background',bg);
	cc.style.setProperty('margin', '50%');
	cc.style.setProperty('font-size', '40px');
	cc.style.setProperty('vertical-align', 'middle'); 
	cc.style.setProperty('display', 'grid');
    cc.style.setProperty('grid-template-columns', '1fr');
	cc.style.setProperty('justify-items', 'center');
	
	return cc;
		
	}