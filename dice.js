var turns = 4;


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
turns--;

$('#turns').text(turns);

if (turns === 0) {
    $(this).unbind('click');
    $(this).attr('disabled', 'disabled');
};
function roll() {
    const rng1 = Math.floor(Math.random() * 6) + 1
    document.querySelector(".dice1").setAttribute("src", rng1 + ".png");
    const rng2 = Math.floor(Math.random() * 6) + 1
    document.querySelector(".dice2").setAttribute("src", rng2 + ".png");
    const rng3 = Math.floor(Math.random() * 6) + 1
    document.querySelector(".dice3").setAttribute("src", rng3 + ".png");
    const rng4 = Math.floor(Math.random() * 6) + 1
    document.querySelector(".dice4").setAttribute("src", rng4 + ".png");
    const rng5 = Math.floor(Math.random() * 6) + 1
    document.querySelector(".dice5").setAttribute("src", rng5 + ".png");
}

let diceData = [
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


const diceDivs = document.querySelectorAll('.dice');

diceDivs.forEach( (dice) => {
    if (dice.dataset.status == 'active') {
        dice.dataset.status == 'locked';
        diceData[dice.dataset.index].status ='active'
    } else {
        dice.dataset.status = 'active';
        diceData[dice.dataset.index] = 'active';
    }
    console.log(diceData)
});
