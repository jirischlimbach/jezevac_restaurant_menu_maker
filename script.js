
function randomNumber(options) {
    let num = Math.floor(Math.random() * options);
    return num;
}

//declared BUTTON that will start the function
let button = document.getElementById('button');

function randomMenu() {
    let menuDiv = document.getElementById('created_menu_id');
    menuDiv.style.display = 'flex';
    //Find the random DRINK and render it to the web
    let drink = document.getElementById('drink');
    let num = randomNumber(6);
    switch (num) {
        case 0:
            drink.innerHTML = 'Velká Cola';
            break;
        case 1:
            drink.innerHTML = 'Malá Cola';
            break;
        case 2:
            drink.innerHTML = 'Ožujsko';
            break;
        case 3:
            drink.innerHTML = 'Karlovačko';
            break;
        case 4:
            drink.innerHTML = 'Ožujsko Grejp';
            break;
        case 5:
            drink.innerHTML = 'Minerální Voda';
            break;
        default:
            drink.innerHTML = 'Dle Tvého výběru';
            break;
    
    }

    //Find the random STARTER meal and render it to the web
    let starter = document.getElementById('starter');
    num = randomNumber(14);
    switch (num) {
        case 0:
            starter.innerHTML = 'Pršut';
            break;
        case 1:
            starter.innerHTML = 'Ovčji sir';
            break;
        case 2:
            starter.innerHTML = 'Salata od hobotnice';
            break;
        case 3:
            starter.innerHTML = 'Rižoto od škampi';
            break;
        case 4:
            starter.innerHTML = 'Rižoto od plodova mora';
            break;
        case 5:
            starter.innerHTML = 'Dagnje na buzaru';
            break;
        case 6:
            starter.innerHTML = 'Goveda juha';
            break;
        case 7:
            starter.innerHTML = 'Juha s jojem';
            break;
        case 8:
            starter.innerHTML = 'Riblja juha';
            break;
        case 9:
            starter.innerHTML = 'Juha od rajčice';
            break;
        case 10:
            starter.innerHTML = 'Zelena salata';
            break;
        case 11:
            starter.innerHTML = 'Salata od tune';
            break;
        case 12:
            starter.innerHTML = 'Šopska salata';
            break;
        case 13:
            starter.innerHTML = 'Mozzarela sir sa svježom rajčicom';
            break;
        default:
            starter.innerHTML = 'Dle Tvého výběru';
            break;
    }

    //Find the random main MEAL and render it to the web
    let meal = document.getElementById('meal');
    num = randomNumber(13);
    switch (num) {
        case 0:
            meal.innerHTML = 'Špageti sa plodovima mora';
            break;
        case 1:
            meal.innerHTML = 'Špageti bolognese';
            break;
        case 2:
            meal.innerHTML = 'Špageti carbonara';
            break;
        case 3:
            meal.innerHTML = 'Pizza Capriciosa';
            break;
        case 4:
            meal.innerHTML = 'Pizza sa tunom';
            break;
        case 5:
            meal.innerHTML = 'Pizza Margherita';
            break;
        case 6:
            meal.innerHTML = '1/2 Pileta sa ražnja sa prilogom';
            break;
        case 7:
            meal.innerHTML = 'Škampi na žaru sa prilogom';
            break;
        case 8:
            meal.innerHTML = 'Tuna steak sa prilogom';
            break;
        case 9:
            meal.innerHTML = 'Mješana riba na žaru sa prilogom';
            break;
        case 10:
            meal.innerHTML = 'Ligne na žaru sa prilogom';
            break;
        case 11:
            meal.innerHTML = 'Lignje pržene sa prilogom';
            break;
        case 12:
            meal.innerHTML = 'Pržene sardele sa prilogom';
            break;
        default:
            meal.innerHTML = 'Pizza Capriciosa';
            break;
    }

    //Find the random SIDE DISH if needed (the chosen meal has to be with some side dish) and render it to the web
    let sideDishDiv = document.getElementById('side_dish_div');
    //if meal contains 'prilogom' then it will render some random side dish
    if (meal.innerHTML.includes('prilogom')) {
        sideDishDiv.style.display = 'block';
        let sideDish = document.getElementById('side_dish');
        num = randomNumber(3);
        switch (num) {
            case 0:
                sideDish.innerHTML = 'Slany Krumpir';
                break;
            case 1:
                sideDish.innerHTML = 'Pomfrit';
                break;
            case 2:
                sideDish.innerHTML = 'Blitva';
                break;
            default:
                sideDish.innerHTML = 'Pomfrit'
                break;
        }
    } else if (!meal.innerHTML.includes('prilogom')) {
        sideDishDiv.style.display = 'none';
    }

    //changing the button's text
    button.innerHTML = 'Připravit jiné menu'
}


//Event Listener on button

button.addEventListener('click', randomMenu);