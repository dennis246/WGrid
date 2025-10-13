	console.log('in util container script');
	
	
	
	var utilButtons = new Map();
	
	utilButtons.set('A1', {label:'A1', id='A1', rendered:'Y'});
	utilButtons.set('A2', {label:'A2', id='A2', rendered:'Y'});
	
	
	
	
	
	
	function emitUtilityContainer() {
	
	var uc = document.createElement('div');
	
	uc.style.setProperty('background','black');
	uc.style.setProperty('filter','blur(5px)');
	uc.style.setProperty('filter','drop-shadow(16px 16px 10px black)');
	//uc.style.setProperty('margin','auto auto 10px auto');
	uc.style.setProperty('bottom','5%');
	uc.style.setProperty('left','50%');
	uc.style.setProperty('position','absolute');
	uc.style.setProperty('padding','2px');	 
	uc.style.setProperty('min-width',10+'rem');	 
	uc.style.setProperty('min-height',2+'rem');
	uc.style.setProperty('border','2px solid red');
	uc.style.setProperty('border-radius','50px');
	
	uc.appendChild(addUtility());
	
	return uc;
	
	}
	
	
	
	function addUtility() {
		
		var currentUtil = document.createElement('div');
		
		currentUtil.appendChild(addButton('A1'));
		currentUtil.appendChild(addButton('A2'));
		currentUtil.appendChild(addButton('A3'));
		currentUtil.appendChild(addButton('A4'));
		
		currentUtil.appendChild(addButton('A5'));
		currentUtil.appendChild(addButton('A6'));
		currentUtil.appendChild(addButton('A7'));
		
		currentUtil.style.setProperty('left','50%');
		currentUtil.style.setProperty('right','50%');
	
		//currentUtil.style.setProperty('padding','5px');
		currentUtil.style.setProperty('color','white');
		//currentUtil.style.setProperty('border','1px solid white');
		currentUtil.style.setProperty('border-radius','50%');
		currentUtil.style.setProperty('width','30px');	 
		currentUtil.style.setProperty('height','30px');	 
		currentUtil.style.setProperty('display','inline');	 
		//currentUtil.style.setProperty('margin','50%');	 
		//currentUtil.addEventListener(()=> toggleCardView());
		
		return currentUtil;
		
	}
	
	function toggleCardsView() {
		
		
		
		
	}
	
	
	
	function addButton(label) {
		
		var button = document.createElement('button');
		
		button.type='button';
		button.innerHTML = label;
		//button.style.setProperty('margin','20%');
		button.style.setProperty('padding','12px');
		button.style.setProperty('border-radius','50%');
		//button.style.setProperty('background','transparent');
		//button.style.setProperty('border','none');
		//button.style.setProperty('color','white');
		return button;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	