const diceNR = document.getElementsByClassName('dice');
const rollBTN = document.getElementById('btn');
const diceDivs = document.querySelectorAll('.dice');
const scoretd = document.querySelectorAll('.score');
let count = 0;


let diceData= [
    {
        value: undefined,
        status: 'active'
    },
    {
        value: undefined,
        status: 'active'
    },
    {
        value: undefined,
        status: 'active'
    },
    {
        value: undefined,
        status: 'active'
    },
    {
        value: undefined,
        status: 'active'

    },
]



diceDivs.forEach((dice) => {
    dice.addEventListener('click', () =>{
        if (count > 4){
            if (dice.dataset.status == 'active'){
                dice.dataset.status = 'locked';
                diceData[dice.dataset.index].status = 'locked';
             //   diceData[dice.dataset.value] = 1;
                console.log(dice.attributes['data-index'])
                console.log('dice data-index: ' + dice.attributes['data-index'].value)
                diceData[dice.dataset.index].value = dice.textContent
                console.log('dice content: ' + dice.textContent)

                diceData[dice.dataset.index].value = dice.textContent

                console.log('dice nr in diceData: ' + diceData[dice.dataset.index].value)

            }else{
                dice.dataset.status = 'active';
                diceData[dice.dataset.index].status = 'active';
                diceData[dice.dataset.index].value = undefined
                console.log(diceData[dice.dataset.index].value)
            }
            console.log(diceData);
        }
    });
});
scoretd.forEach((score) => {
    score.addEventListener('click', () => {
         console.log(score.attributes['data-score-index'].value)
         if (score.attributes['data-score-index'].value == 1){

         }

    })
})
rollBTN.addEventListener('click', () => {
    count++;
    if (count < 3){
        diceDivs.forEach((dice) => {
            if (dice.dataset.status == 'active'){
                let randomNR = Math.floor(Math.random() * 6) + 1
                console.log(randomNR);
                dice.innerHTML= randomNR
            }
        })
    }else{
        rollBTN.setAttribute('disabled', true);
        let totalScore = diceData[0].value * diceData[1].value

        console.log('AAAAAA' + totalScore)
    }
})
