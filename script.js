/*function onButtonClicked() {
    console.log("Cliccato!");
}

document.querySelector("#bottone").addEventListener("click", onButtonClicked);*/

document.querySelector("#bottone").addEventListener("click", () => {
    console.log("cliccato");

    document.getElementById("img").src="./img/yellow_lamp.png";
});