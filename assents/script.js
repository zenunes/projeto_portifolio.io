document.querySelector('.menu-opener').addEventListener('click',() => {
    let nav = document.querySelector('header nav');
    nav.classList.toggle('opened'); // toggle alterna, se tema  classe, ele tira e se não ele coloca
});

// FUNÇÃO do slider
const toggleSlider = () =>{ // função toggleslider para 
    const slides = document.querySelectorAll('input[name=slider]'); // pegamos todos os inputs que tiverem o name slider
    if(slides.length === 0) return; // vareficação, se slider for 0 então retorne

    let current = document.querySelector('input[name=slider]:checked'); // pegamos o input que estiver marcado
    if(!current){        // se current n estiver nenhum checked ent, current recebe os slider e marca o primeiro deles com checked
        current = document.querySelector('input[name=slider]');
        current.setAttribute('checked',  true)
    }
     let id = parseInt(current.getAttribute('id').split('-')[1]); //pega o numero que estiver no input e transfomra ele em inteiro
     if(id + 1 <= slides.length){
        id++;
     }else{
        id = 1;
     }
     for(let slider of slides) slider.removeAttribute('checked');
     document.querySelector(`#slider-${id}`).setAttribute('checked', true)
}
setInterval(toggleSlider, 4500);
