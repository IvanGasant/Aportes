function calcf(){

	if(validar()){

		let c = Number(document.getElementById('cantidad').value)

		let ci = c

		let p = Number(document.getElementById('porcentaje').value)

		let d = Number(document.getElementById('dias').value)

		let interes

		for(let i = 0; i < d; i++){

			let r1 = c / 100 * p / 365

			c += r1

			console.log(c)

		}

		interes = c - ci

		document.getElementById('resultado').innerHTML = `Tus ${ci} se convertirán en ${c.toFixed(2)}, generando un interés de ${interes}`
		document.getElementById('resultado').style.backgroundColor="white"
		document.getElementById('resultado').style.color = 'green'
		document.getElementById('resultado').style.border = 'solid 2px green'

	}
	
}

function validar(){

	let c = Number(document.getElementById('cantidad').value)

	let p = Number(document.getElementById('porcentaje').value)

	let d = Number(document.getElementById('dias').value)

	if(c == 0 || p == 0 || d == 0){

		document.getElementById('resultado').innerHTML = 'Algún campo está vacío o es un [0]' 
		document.getElementById('resultado').style.color = 'red'
		document.getElementById('resultado').style.backgroundColor = 'white'
		document.getElementById('resultado').style.border = 'solid 2px red'

		return false

	}else if(isNaN(c) || isNaN(p) || isNaN(d)){

		document.getElementById('resultado').innerHTML = 'Se ha introducido un carácter no valido'
		document.getElementById('resultado').style.backgroundColor = 'white'
		document.getElementById('resultado').style.color = 'red'
		document.getElementById('resultado').style.border = 'solid 2px red'

		return false

	}else{

		return true

	}

}

function limpiarf(){

	document.getElementById('cantidad').value = ''
	document.getElementById('porcentaje').value = ''
	document.getElementById('dias').value = ''

	document.getElementById('resultado').innerHTML = ''
	document.getElementById('resultado').style.backgroundColor = 'black'
	document.getElementById('resultado').style.border = 'solid 0px '

	document.getElementById('cantidad').focus()

}

