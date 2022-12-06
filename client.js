console.log('Here are all the available people:', people);
$(document).ready(onReady);

function onReady(){
    render();
    $('body').on('click','.pickPersonButton',pickPerson )
}
function render(){
    $('div').empty();
    for(let i = 0; i < people.length; i++){
        $('div').append(`
        <button class="pickPersonButton" data-person-id=${people[i].name}><img src="https://github.com/${people[i].githubUsername}.png?size=250" alt="Profile image of Chris"></button>
        `);
    }
    let randomNumber1 = randomNumber(0,6)
    $('#clickOnName').text(people[randomNumber1].name);
}
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
function pickPerson(){
    let objectPerson = $(this).data()
    console.log(objectPerson)
    let personID = objectPerson.personId
    console.log(personID);
    let personToSelect = $('#clickOnName').text();
    console.log(personToSelect)
    if(personID === personToSelect){
        $('h2').text('You got it.')
    } else {
        $('h2').text('Try Again')
    }
    
}