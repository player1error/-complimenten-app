
// generate compliment
async function fechtCompliments(){
    const response = await fetch("./data/compliments.json");
    const data = await response.json();
    return data.compliments;
}
// display compliment
function displayRandomComplint(compliments){
    const complimentElement = document.getElementById("complimenten-button");
    const getCompliments = Math.floor(Math.random() * compliments.length);
    const randomCompliment = compliments[getCompliments];
    const displayH1 = document.getElementById("display-complimenten-onScreen")
    displayH1.textContent = randomCompliment;


    // DONE  opdracht 1 hoe random compliment uit je data verzameling haalt met Math.floor
    // DONE opdracht 2 hoe je een compliment toont in het complimetEliment met text contect
    // opdracht 3 maak het mooi
}


// call function

(async ()=>{
    // load compliments
    const compliments = await fechtCompliments(); //cammelCasingTwoThree
    // load button

    const button =  document.getElementById("complimenten-button");    //DOM - document object module
    button.addEventListener("click", ()=>displayRandomComplint(compliments));
})();


//use display-complimenten-onScreen |  to get the compliment on screen 

//complimenten-button | to get the button uimpuict to genorate the complimenten