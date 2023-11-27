const grid = document.querySelector('.grid');
const timer = document.querySelector('.timer')
const filmes = [
    'dory',
    'encanto',
    'enrolados',
    'divertidamente',
    'incriveis',
    'luca',
    'merida',
    'moana',
    'nemo',
    'toystory',
    'toystory3',
    'up'
];

const createElement = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className;
    return element
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
const disabledCards = document.querySelectorAll('.disabled-card');

if (disabledCards.length === 24){
    clearInterval(this.loop);
    alert (`Parabéns, você venceu o jogo! Seu tempo foi: ${timer.innerHTML} `)

}
}

const checkCards = () => {
    const firtsfilmes = firstCard.getAttribute('data-filmes')
    const secondfilmes = secondCard.getAttribute('data-filmes')

    if (firtsfilmes === secondfilmes) {

        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = ''
        secondCard = ''

        checkEndGame()

    } else {

        setTimeout(() => {

            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = ''
            secondCard = ''

        }, 500);
    }
}

const revealCard = ({ target }) => {
    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if (firstCard === '') {

        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;

    } else if (secondCard === '') {

        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();

    }


}

const createCard = (filmes) => {


    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('img/${filmes}.png')`;


    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-filmes', filmes)

    return card
}

const loadGame = () => {
    const duplicateFilmes = [...filmes, ...filmes];

    const arrayembaralhado = duplicateFilmes.sort(() => Math.random() - 0.5);


    arrayembaralhado.forEach((filme) => {

        const card = createCard(filme);
        grid.appendChild(card)

    });

}

const startTimer =()=>{

this.loop = setInterval(()=> {
const currentTime = +timer.innerHTML;
timer.innerHTML = currentTime + 1;

},1000);

}
startTimer();
loadGame();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        