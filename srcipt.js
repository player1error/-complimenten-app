// generate compliment
async function fechtCompliments(){
    const response = await fetch("./data/compliments.json");
    const data = await response.json();
    return data.compliments;
}
// display compliment
function displayRandomComplint(compliments){
    const complimentElement = document.getElementById("complimenten-button");
    // opdracht 1 hoe random compliment uit je data verzameling haalt met Math.floor
    // opdracht 2 hoe je een compliment toont in het complimetEliment met text contect
    // opdracht 3 maak het mooi
}
// call function

(async ()=>{
    // load compliments
    const compliments = await fechtCompliments(); //cammelCasingTwoThree
    // load button
    console.log(compliments);
    const button =  document.getElementById("complimenten-button");    //DOM - document object module
    button.addEventListener("click", ()=>displayRandomComplint(compliments));
})();