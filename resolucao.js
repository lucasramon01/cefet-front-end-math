
let resolver = document.querySelector('#resolver');
resolver.addEventListener('click', function() { 
	window.alert('Resolvendo...');
	
	let a = document.querySelector('#coeficiente-a').value;
	let b = document.querySelector('#coeficiente-b').value;
	let c = document.querySelector('#coeficiente-c').value;
	
	if (a == 0){
		window.alert('A equação informada não é de segundo grau.');
		document.querySelector('#resultado-delta').value = '';
		document.querySelector('#resultado-x1').value = '';
		document.querySelector('#resultado-x2').value = '';
		document.querySelector('#quantidade-raizes').value = '';
		document.querySelector('#parabola').value = '';
		document.querySelector('#vertice').value = '';
		return;
	}
	let delta = Math.pow(b, 2) - 4*a*c;
	document.querySelector('#resultado-delta').value = delta;
	
	if(delta >= 0){	

		let x1 = (-b + Math.sqrt(delta))/(2*a);
		let x2 = (-b - Math.sqrt(delta))/(2*a);

		document.querySelector('#resultado-x1').value = x1;
		document.querySelector('#resultado-x2').value = x2;

		if (delta == 0){
			document.querySelector('#quantidade-raizes').value = '1';
		} else {
			document.querySelector('#quantidade-raizes').value = '2';
		}

		if (a > 0){
			document.querySelector('#parabola').value = 'cima';
		} else {
			document.querySelector('#parabola').value = 'baixo';
		}

		x=-b/(2*a);
		y=-delta/(4*a);
		document.querySelector('#vertice').value = '('+x+','+y+')';

	} else {
		document.querySelector('#resultado-x1').value = '';
		document.querySelector('#resultado-x2').value = '';	
		document.querySelector('#quantidade-raizes').value = '';
		document.querySelector('#parabola').value = '';
		document.querySelector('#vertice').value = '';
	}

});