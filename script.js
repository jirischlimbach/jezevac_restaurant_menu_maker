
function randomNumber(options) {
    let num = Math.floor(Math.random() * options);
    return num;
}

function randomMenu() {
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
            meal.innerHTML = 'Škampi sa žara sa prilogom';
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
    }
}

let button = document.getElementById('button');
button.addEventListener('click', randomMenu);

/*

prilohy:
Slany krumpir
Pomfrit
Blitva

*/