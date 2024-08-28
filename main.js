const fila = document.querySelector('.container-carousel');
const movie = document.querySelectorAll('.movie');


const leftangle = document.getElementById('left-angle');
const rightangle = document.getElementById('right-angle');


//------------Event listener right angle----------------//
rightangle.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;
    
    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }

});
//------------Event listener Left angle----------------//
leftangle.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;
    
    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.previousSibling){
        indicadorActivo.previousSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});


//------------Paginacion----------------//
const numpag = Math.ceil(movie.length / 5);
for(let i = 0; i < numpag; i++){
    const indicador = document.createElement('button');

    if(i === 0){
        indicador.classList.add('activo'); 
    }


    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e) =>{
        fila.scrollLeft = i * fila.offsetWidth;


        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    })
}


//-------HOVER--------//
movie.forEach((movies) => {
	movies.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			movie.forEach(movies => movies.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});


fila.addEventListener('mouseleave', () => {
    movie.forEach(movies => movies.classList.remove('hover'));
});







