function createDice(number) {
    const dotPosition = {
        1: [
            [50, 50]
        ],
        2: [
            [20, 20],
            [80, 80]
        ],
        3: [
            [20, 20],
            [50, 50],
            [80, 80]
        ],
        4: [
            [20, 20],
            [20, 80],
            [80, 20],
            [80, 80]
        ],
        5: [
            [20, 20],
            [20, 80],
            [50, 50],
            [80, 20],
            [80, 80]
        ],
        6: [
            [20, 20],
            [20, 80],
            [50, 20],
            [50, 80],
            [80, 20],
            [80, 80]
        ]
    };
    const dice = document.createElement("div");
    dice.classList.add("dice");
    for (const dotPos of dotPosition[number]) {
        const dot = document.createElement("div");
        dot.classList.add("dice-dot");
        dot.style.setProperty("--top", dotPos[0] + "%");
        dot.style.setProperty("--left", dotPos[1] + "%");
        dice.appendChild(dot);
    }
    return dice;
}
function randomize(diceContainer, numberOfDice) {
    diceContainer.innerHTML = "";
    for (let i = 0; i < numberOfDice; i++) {
        const random = Math.floor(Math.random() * 6 + 1);
        const dice = createDice(random);
        diceContainer.appendChild(dice);
    }
}
const diceContainer = document.querySelector(".dice-container");
const btnRollDice = document.querySelector(".roll-btn")

btnRollDice.addEventListener("click", () => {
    const NUMBER_OF_DICE = document.getElementById("diceNo").value;
    randomize(diceContainer, NUMBER_OF_DICE);
})
randomize(diceContainer, 2);