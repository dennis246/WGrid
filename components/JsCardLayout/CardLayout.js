	console.log('in cardLayout layout script');
	
	function emitCardLayout(cardcount,pos_x,pos_y,width,height) {
	
	
	var cardLayout = document.createElement('div');
	//cardLayout.style.setProperty('background',linebg);
	//cardLayout.style.setProperty('padding','5px 5px');	 
	//card.style.setProperty('position','absolute');	 
	//cardLayout.style.setProperty('margin-top',pos_y+'px');	 
	//cardLayout.style.setProperty('margin-left',pos_x+'px');	 
	
	cardLayout.style.setProperty('position','absolute');	 
	cardLayout.style.setProperty('margin','5%');	 
	//cardLayout.style.setProperty('width',width+'rem');	 
	//cardLayout.style.setProperty('height',height+'rem');	
	
	cardLayout.style.setProperty('width','90%');
	cardLayout.style.setProperty('height','80%');
	cardLayout.style.setProperty('display','block');	
	cardLayout.style.setProperty('justify-content','center');	
	cardLayout.style.setProperty('overflow','scroll');	

	cardLayout.style.setProperty('border','1px solid purple');		
	
	
	var cardsArrangement = 'cascade';
	var cardsArrangement = 'trail_Y';
	
	var posOffset = 0;
	for(var a=0; a<cardcount; a++){
		
		var cardMap = new Map();
		cardMap.set('cardsArrangement',cardsArrangement);
		cardMap.set('width',24);
		cardMap.set('height',30);
		cardMap.set('bg','#e3e346');
		cardMap.set('content',a+1);
		
		if(cardsArrangement === 'cascade'){
			posOffset += 15; 	
			cardMap.set('posOffset_X',15);
		cardMap.set('posOffset_Y',15);
		} else if(cardsArrangement === 'trail_Y'){
			posOffset += 0; 	
			cardMap.set('posOffset_X',0);
			cardMap.set('posOffset_Y',40);
		}		
		
	//cardLayout.appendChild(emitCard(posOffset,posOffset, 24,30,'#e3e346',a+1));	
		cardLayout.appendChild(emitCard(cardMap));	
	}
	
	
		return cardLayout;
	
	}