//add roll counter 6
//rollBTN will lock after counter 6 and game ends
//winning something thingy
const diceNR = document.getElementsByClassName("dice");
const rollBTN = document.getElementById("btn");
const diceDivs = document.querySelectorAll(".dice");
const scoretd = document.querySelectorAll(".score");
const scorePoints = document.getElementById("points");
let roll_count = 0;
let dices = [];
let scoreHoldnotSorted = [];
let scoreHold = [];
let diceData = [
    {
        value: undefined,
        status: "active",
    },
    {
        value: undefined,
        status: "active",
    },
    {
        value: undefined,
        status: "active",
    },
    {
        value: undefined,
        status: "active",
    },
    {
        value: undefined,
        status: "active",
    },
];


function getThreeOfKind(dices) {
    const values = [
        dices[0]['value'],
        dices[1]['value'],
        dices[2]['value'],
        dices[3]['value'],
        dices[4]['value']
    ].sort();
    if (values[0] === values[1] && values[2] === values[1] ||
        values[1] === values[2] && values[2] === values[3] ||
        values[3] === values[4] && values[4] === values[3]) {
        console.log("kolmik")
    } else {
        console.log("pole kolmik")
    }

}



diceDivs.forEach((dice) => {
    dice.addEventListener("click", () => {
        if (roll_count >= 1) {
            if (dice.dataset.status == "active") {
                dice.dataset.status = "locked";
                diceData[dice.dataset.index].status = "locked";
                //   diceData[dice.dataset.value] = 1;
                // console.log(dice.attributes["data-index"]);
                // console.log("dice data-index: " + dice.attributes["data-index"].value);
                diceData[dice.dataset.index].value = dice.textContent;
                 console.log("dice content: " + dice.textContent);

                diceData[dice.dataset.index].value = dice.textContent;

                console.log(
                    "dice nr in diceData: " + diceData[dice.dataset.index].value
                );
                dices.push(diceData[dice.dataset.index].value);
                //console.log(dices);
            } else {
                dice.dataset.status = "active";
                diceData[dice.dataset.index].status = "active";
                diceData[dice.dataset.index].value = undefined;
                console.log(diceData[dice.dataset.index].value);

                dices.splice(diceData[dice.dataset.index].value);
            }
            console.log(diceData);
        }
    });
});
scoretd.forEach((score) => {
    score.addEventListener("click", () => {
        //console.log(score.attributes["data-score-index"].value);
        //console.log(score.attributes["data-score-status"].value);
        if (score.attributes["data-score-status"].value == "active") {
            const scoreType = score.dataset.scoreType        
            switch (scoreType) {
                
                case "threeOfKind":
                    getThreeOfKind(diceData)
                    break;
                case "oneOfKind": 
                    const index = score.dataset.scoreIndex
                    score.innerHTML = getOneOfKind(diceData, index);
                    break;
            
                default:
                    break;
            }
            score.dataset.status = "locked";
        }

        /* if (counter == 0) {
            score.attributes["data-score-status"].value = "locked";
            score.innerHTML = 0;
            scoreHoldSorted = 0;
        } else {
            scoreHoldnotSorted.push(scorePointsCount);
            scoreHoldSorted = scoreHoldnotSorted.reduce((a, b) => a + b, 0);
            // scorePoints.innerHTML = scoreHoldSorted
            scorePoints.innerHTML = scoreHoldSorted;
        }
        //console.log(counter + "counterrrr");

        counter = 0;
         *///console.log(counter + "counterrrr");
        gameReset();
    });
});
function gameReset() {
    diceDivs.forEach((dice) => {
        dice.dataset.status = "active";
        diceData[dice.dataset.index].value = undefined;
        diceData[dice.dataset.index].status = "active";
        dice.innerHTML = 0;
    });
    roll_count = 0;
    rollBTN.removeAttribute("disabled", true);
    dices = [];
}

rollBTN.addEventListener("click", () => {
    roll_count++;
    diceDivs.forEach((dice) => {
        if (dice.dataset.status == "active") {
            if (roll_count < 3) {
                let randomNR = Math.floor(Math.random() * 6) + 1;
                //console.log(randomNR);
                dice.innerHTML = randomNR;
            }
            if (roll_count == 3) {
                let randomNR = Math.floor(Math.random() * 6) + 1;
                //console.log(randomNR);
                dice.innerHTML = randomNR;
                rollBTN.setAttribute("disabled", true);
            }
        }
    });
    console.log("count" + roll_count);
});
function getOneOfKind(dices, index) {
    let counter = 0;
    console.log(dices, index)
    for (let i = 0; i < dices.length; i++) {
        if (dices[i].value === index) {
            counter++;
        }
    }
    return index * counter;   
}