const lugarSelecionado = document.addEventListener('click', function(e){
    const el = e.target;
    for(let i = 0; i < 21; i++){
        let cadeiras = document.getElementsByClassName('lugar')[i].innerText;
        if(el.innerText === cadeiras){
            console.log(el.innerText)
            el.style.backgroundColor = 'green';
            el.style.color = 'white';
        }
    }
})
