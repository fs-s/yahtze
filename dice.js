// var turns = 3;


// $('#roll').click(function () {
//     var cubes = $('.diceid:not(.held)');
//     cubes.each(function () {
//         roll($(this));
//     });
//     turns--;

//     $('#turns').text(turns);

//    if (turns === 0) {
//        $(this).unbind('click');
//        $(this).attr('disabled', 'disabled');
//    }
//});
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

diceDivs.forEach((dice) => {
    dice.addEventListener('click', () => {
        if (dice.dataset.status == 'active') {
            dice.dataset.status == 'locked';
            diceData[dice.dataset.index].status = 'active'
        } else {
            dice.dataset.status = 'active';
            diceData[dice.dataset.index] = 'active';

        }
    });
    console.log(diceData)
});
