
let state = initState();
let game = initGameObject();

const availableKeys = [
    'KeyA',
    'KeyS',
    'KeyD',
    'KeyW',
    'Space',
];

document.addEventListener('keydown', (e) => {
    if (availableKeys.includes(e.code)) {
        state.keys[e.code] = true;
    }
});

document.addEventListener('keyup', (e) => {
    if (availableKeys.includes(e.code)) {
        state.keys[e.code] = false;
    }
});

game.startScreen.addEventListener('click', (e) => {
    game.startScreen.classList.add('hidden');
    game.instructionsScreen.classList.add("hidden");
    game.levelScreen.classList.add("hidden");
    game.gameScreen.classList.remove('hidden');
    start(state, game);
});

game.instructionsScreen.addEventListener("click", (e) => {
    game.startScreen.classList.add('hidden');
    game.instructionsScreen.classList.add("hidden");
    game.levelScreen.classList.add("hidden");
    game.instructionsContainer.classList.remove('hidden');
})

function backFunc() {
    game.instructionsContainer.classList.add('hidden');
    game.levelContainer.classList.add("hidden")
    game.startScreen.classList.remove('hidden');
    game.instructionsScreen.classList.remove("hidden");
    game.levelScreen.classList.remove("hidden");
}

game.levelScreen.addEventListener("click", (e) => {
    game.startScreen.classList.add('hidden');
    game.levelScreen.classList.add("hidden");
    game.instructionsScreen.classList.add("hidden");
    game.levelContainer.classList.remove("hidden")
})

function imgClick() {
    let currentImg = window.event.target

    document.querySelectorAll(".game-image").forEach((img) => {
        img.style.borderColor = "gray"
    })

    currentImg.style.borderColor = "yellow"

    document.getElementById("main-game").style.backgroundImage = `url('../images/${currentImg.src.substr(-10)}')`
    document.querySelector(".game-screen").style.backgroundImage = `url('../images/${currentImg.src.substr(-10)}')`
}
