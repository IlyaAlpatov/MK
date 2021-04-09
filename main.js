
// Игроки

const player1 = {
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
    name: 'scorpion',
    hp: 80,
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

const createPlayer = (playerName, player) => {
    const arenas = document.querySelector('.arenas');

    const playerDiv = document.createElement('div');
    playerDiv.classList.add('player1');

    const progressbar = document.createElement('div');
    progressbar.classList.add('progressbar');
    playerDiv.appendChild(progressbar);

    const life = document.createElement('div');
    life.classList.add('life');
    progressbar.appendChild(life);

    const name = document.createElement('div');
    name.classList.add('name');
    progressbar.appendChild(name);


    const character = document.createElement('div');
    character.classList.add('character');
    playerDiv.appendChild(character);

    const characterImg = document.createElement('img');
    character.appendChild(characterImg);

    life.style.width = `${player.hp}%`;
    name.innerText = player.name;
    characterImg.src = player.img;

    arenas.appendChild(playerDiv);
};

createPlayer('player1', player1);
createPlayer('player2', player2);