const diceIds = document.querySelectorAll('#dice');
var turns = 3;

$('#roll').click(function () {
     var cubes = $('.diceid:not(.held)');
     cubes.each(function () {
         roll($(this));
     });
     turns--;
     $('#turns').text(turns);
    if (turns === 0) {
        $(this).unbind('click');
        $(this).attr('disabled', 'disabled');
    }
});

function roll() {
    for (let i = 0; i < 5; i++) {
        if( diceData[i].status == 'aktiv' ) {
            const rng = Math.floor(Math.random() * 6) + 1;
            document.querySelector(".dice" + i).setAttribute("src", + rng + ".png");
        }
    }
}
function selectDice() {
    document.getElementById("dice1").innerhtml = 'held';
}

let diceData = [
    {
        value: undefined,
        status: 'aktiv'
    },
    {
        value: undefined,
        status: 'aktiv'
    },
    {
        value: undefined,
        status: 'aktiv'
    },
    {
        value: undefined,
        status: 'aktiv'
    },
    {
        value: undefined,
        status: 'aktiv'
    }
]

diceIds.forEach((dice) => {
    dice.addEventListener('click', () => {
        if (dice.dataset.status == 'aktiv'){
            dice.dataset.status = 'lukus';
            diceData[dice.dataset.index].status = 'lukus'
        } else {
            dice.dataset.status = 'aktiv';
            diceData[dice.dataset.index].status = 'aktiv'
        }
        console.log(diceData)
    })
})
