function createNumbersArray(count) {
    const numbers = [];
    for (let i = 1; i <= count; i++) {
        numbers.push(i, i);
    }
    return numbers;
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function startGame(count) {
    const gameContainer = document.getElementById('game-container');
    const numbersArray = createNumbersArray(count);
    const shuffledArray = shuffle(numbersArray);

    shuffledArray.forEach((number, index) => {
        const card = createCard(number, index);
        gameContainer.appendChild(card);
    });
}

function createCard(number, index) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.number = number;
    card.dataset.index = index;
    card.addEventListener('click', handleCardClick);
    return card;
}

function handleCardClick() {
    const selectedCards = document.querySelectorAll('.card.selected');
    if (selectedCards.length === 1 && this !== selectedCards[0]) {
        if (this.dataset.number === selectedCards[0].dataset.number) {
            selectedCards.forEach(card => card.classList.remove('selected'));
        } else {
            setTimeout(() => {
                selectedCards.forEach(card => card.classList.remove('selected'));
            }, 1000);
        }
    } else {
        this.classList.add('selected');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    startGame(8);
});
