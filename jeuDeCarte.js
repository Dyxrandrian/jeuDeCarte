const prompt = require("prompt-sync")();
function menu() {
    console.log("  ======Bienvenu dans le winRandomGame (jeu de cartes)======");
    console.log("||=========================================================||");
    console.log("||=========================================================||");
    console.log("||=========================================================||");
}
function userPseudo (){
    return prompt("veuillez saisir votre pseudo:");
}

function randomAtoutIA() {
    let allAtout = ["feu", "eau", "plante"];
    let randomIndexTabAllAtout = Math.floor(Math.random() * allAtout.length);
    return allAtout[randomIndexTabAllAtout];
}

function play() {
    let arrayOfAllRoundScore = [];
    console.log("--Vous avez trois cartes dans le jeux--: feu, eau , plante");
    for (let i = 1; i <= 3; i++) {
        arrayOfAllRoundScore.push(gameRules());
    }
    return arrayOfAllRoundScore;
}

function showRoundResult(arrayOfGameScore) {
    let finalUserScore = arrayOfGameScore[0];
    let finalIaScore = arrayOfGameScore[1];
    let finalDrawNumber = arrayOfGameScore[2];
    console.log("#####Récapitulation des résultats des 3 manches#####:")
    console.log("$* Votre Score  = "+ finalUserScore + " point(s)");
    console.log("$* Score IA = " + finalIaScore + " point(s)");
    console.log("$* Egalité = " + finalDrawNumber);
}

function roundResult (arrayOfAllRoundScore){
    let finalUserScore = arrayOfAllRoundScore[0][0] + arrayOfAllRoundScore[1][0] + arrayOfAllRoundScore[2][0];
    let finalIaScore = arrayOfAllRoundScore[0][1] + arrayOfAllRoundScore[1][1] + arrayOfAllRoundScore[2][1];
    let finalDrawNumber = arrayOfAllRoundScore[0][2] + arrayOfAllRoundScore[1][2] + arrayOfAllRoundScore[2][2];
    return arrayOfGameScore = [finalUserScore,finalIaScore,finalDrawNumber];
}

function makeSomeSpace(){
    console.log ("");
}

function conditionsToWin(arrayOfGameScore){
    let finalUserScore = arrayOfGameScore[0];
    let finalIaScore = arrayOfGameScore[1];
    if (finalUserScore > finalIaScore){
        showRoundResult(arrayOfGameScore);
        makeSomeSpace();
        console.log("(^ ^)Bravo! vous avez gagné la partie.(^ ^)");
        console.log("  _                                     _  ")
        makeSomeSpace();
        return leave()
    }
    else if (finalUserScore == finalIaScore){
        showRoundResult(arrayOfGameScore);
        makeSomeSpace();
        console.log("(- -) Il y a eu égalité  (- -) ");
        console.log("  _                        _   ");
        makeSomeSpace();
        leaveOrNot();
    }
    else {
        showRoundResult(arrayOfGameScore);
        makeSomeSpace();
        console.log("(~ ~) vous avez perdu la partie. (~ ~)");
        console.log("  _                                _  ");
        makeSomeSpace();
        return leave();
    } 
}

function leaveOrNot() {
    let choice = prompt("voulez vous rejouer la partie(oui ou non) :");
    if (choice == "oui") {
        return jeuxDeCarte();
    }
    else {
        makeSomeSpace();
        return leave();
    }
}

function countIaScore(atoutUser, atoutIA) {
    let lose = 0;
    if (atoutUser == "feu" && atoutIA == "eau") {
        loses();
        makeSomeSpace();
        lose++;
    }
    else if (atoutUser == "plante" && atoutIA == "feu") {
        loses();
        makeSomeSpace();
        lose++;
    }
    else if (atoutUser == "eau" && atoutIA == "plante") {
        loses();
        makeSomeSpace();
        lose++;
    }
    return lose;
}

function countDraw(atoutUser, atoutIA) {
    let draw = 0
    if (atoutUser == atoutIA) {
        egalite();
        makeSomeSpace();
        draw++;
    }
    return draw;
}
function countUserScore(atoutUser, atoutIA) {
    let win = 0;
    if (atoutUser == "eau" && atoutIA == "feu") {
        congratulations();
        makeSomeSpace();
        win++;
    }
    else if (atoutUser == "feu" && atoutIA == "plante") {
        congratulations();
        makeSomeSpace();
        win++;
    }
    else if (atoutUser == "plante" && atoutIA == "eau") {
        congratulations();
        makeSomeSpace();
        win++;
    }
    return win;
}


function gameRules() {
    let atoutUser = prompt("[veuillez choisir votre carte]: ");
    makeSomeSpace();
    let atoutIA = randomAtoutIA();
    console.log("---Atout de l'IA--- => " + atoutIA);
    makeSomeSpace();
    let userScore = countUserScore(atoutUser, atoutIA);
    let IaScore = countIaScore(atoutUser, atoutIA);
    let draw = countDraw(atoutUser, atoutIA);
    return arrayOfScore = [userScore, IaScore, draw];
}

function leave() {
    let tabTakingLeave = ["{****Merci d'avoir jouer au jeux!****", "****Revenez quand vous voulez!****", "****A bientôt pour de nouvelle test de chance****", "****On éspère que vous avez aimez le jeux,aurevoir!****"]
    let randomIndexTakingLeave = Math.floor(Math.random() * tabTakingLeave.length);
    console.log(tabTakingLeave[randomIndexTakingLeave]);
}

function congratulations() {
    let tabCongrats = ["=>Quelle chance!,vous avez gagné cette manche.", "=>Bien joué! vous avez gagné cette manche.", "=>Vous êtes voyant ou quoi? Vous avez gagnés cette manche.", "=>Good game,continuer comme ça"]
    let randomIndexTabCongrats = Math.floor(Math.random() * tabCongrats.length);
    console.log(tabCongrats[randomIndexTabCongrats]);
}

function loses() {
    let tabLoses = ["=>vous avez perdu cette manche.", "=>La chance à mal tourner,perdu", "=>Perdu,essayer encore", "=>Ne réflechissez pas trop et vous allez gagner"];
    let randomIndexTabloses = Math.floor(Math.random() * tabLoses.length);
    console.log(tabLoses[randomIndexTabloses]);
}

function egalite() {
    let tabEgalite = ["=>Egalité", "=>Match null", "=>Vous pensez comme un IA, égalité", "=>Même atout donc égalité", "=>Pas de point pour chacun,match null"];
    let randomIndexTabEgalite = Math.floor(Math.random() * tabEgalite.length);
    console.log(tabEgalite[randomIndexTabEgalite]);
}

function jeuxDeCarte (){
    menu();
    makeSomeSpace();
    let pseudo = userPseudo ()
    console.log("Bienvenu "+pseudo+" ! Et bonne chance, vous en aurez besoin.");
    makeSomeSpace();
    let arrayOfGameScore = roundResult(play(),pseudo);
    conditionsToWin(arrayOfGameScore);
}

jeuxDeCarte();