var card1 = document.getElementById('card1');
var card2 = document.getElementById('card2');
var card3 = document.getElementById('card3');

var btnAtivar = document.getElementById('btnAtivar');

btnAtivar.addEventListener('click', function() {
    if (card1.classList.contains('show') || card2.classList.contains('show') || card3.classList.contains('show')) {
        card1.classList.remove('show');
        card2.classList.remove('show');
        card3.classList.remove('show');
        btnAtivar.textContent = 'Ver Mais';
    } else {
        card1.classList.add('show');
        card2.classList.add('show');
        card3.classList.add('show');
        btnAtivar.textContent = 'Ver Menos';
    }
});

window.addEventListener('scroll', function() {
    var sobre = document.getElementById('sobre');
    var sobrePosition = sobre.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.35;

    if (sobrePosition < screenPosition) {
      sobre.classList.add('textoVisivel');
    }
});


