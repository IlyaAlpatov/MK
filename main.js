'use strict'

const arenas = document.querySelector('.arenas');
const buttonRandom = document.querySelector('.button');

// Игроки

const player1 = {
    player: 1,
    name: 'liukang',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: [
        'Plasma Cannon',
        'Throwing disc'
    ],
    attack() {
        console.log(`${this.name} fight`);
    },
};

const player2 = {
    player: 2,
    name: 'scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: [
        'Ninjato',
        'Kunai on a chain'
    ],
    attack() {
        console.log(`${this.name} fight`);
    },
};

// Создание игрока

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    if (className) {
        element.classList.add(className);
    }

    return element;
}

const createPlayer = (player) => {
    const playerDiv = createElement('div', `player${player.player}`);
    const progressbar = createElement('div', 'progressbar');
    const life = createElement('div', 'life');
    const name = createElement('div', 'name');
    const character = createElement('div', 'character');
    const characterImg = createElement('img');

    playerDiv.appendChild(progressbar);
    progressbar.appendChild(life);
    progressbar.appendChild(name);
    playerDiv.appendChild(character);
    character.appendChild(characterImg);

    life.style.width = `${player.hp}%`;
    name.innerText = player.name;
    characterImg.src = player.img;
    player.attack();
    return playerDiv;
};

arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));

const winnerShow = (playerObj1, playerObj2) => {
    const winTitle = createElement('div', 'loseTitle');

    if (playerObj1.hp <= 0) {
        winTitle.innerText = `${playerObj2.name} Win`;
        arenas.appendChild(winTitle);
    } else if (playerObj2.hp <= 0) {
        winTitle.innerText = `${playerObj1.name} Win`;
        arenas.appendChild(winTitle);
    }

    buttonRandom.disabled = true;

}

const changeHP = (player) => {
    const playerLife = document.querySelector(`.player${player.player} .life`);
    if (player.hp > 0) {
        player.hp = player.hp - randomAtack();
        playerLife.style.width = `${player.hp}%`;
    }else if (player.hp <= 0) {
        player.hp = 0;
        playerLife.style.width = 0;
        winnerShow(player1, player2);
    }
};

const randomAtack = () => {
    const atack = Math.round(Math.random() * (20 - 1) + 1);
    return atack;
}

buttonRandom.addEventListener('click', () => {
    changeHP(player1);
    changeHP(player2);
});
