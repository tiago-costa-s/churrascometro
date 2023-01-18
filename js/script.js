"strict mode";

const calcularBTN = document.querySelector("#btn-calcular");
const voltarBTN = document.querySelector("#btn-voltar");
const menInput = document.querySelector("#men");
const womanInput = document.querySelector("#woman");
const childInput = document.querySelector("#child");
const timeInput = document.querySelector("#time");
const calcResult = document.querySelector("#calc-result");

// class
class Person {
    constructor(meatConsumption, drinkConsumption) {
        this.meatConsumption = meatConsumption;
        this.drinkConsumption = drinkConsumption;
    }
}

const mens = new Person(0.167, 0.400);
const womans = new Person(0.150, 0.350);
const childs = new Person(0.100, 0.200);

calcularBTN.addEventListener("click", () => {
    const mensTotal = menInput.value;
    const womansTotal = womanInput.value;
    const childTotal = childInput.value;
    const timeTotal = timeInput.value;

    // Calcula consumo de Carne por tipo de Person
    function mensMeatConsumption() {
        const totalMeat = mens.meatConsumption * timeTotal;
        return totalMeat * mensTotal;
    }

    function womansMeatConsumption() {
        const totalMeat = womans.meatConsumption * timeTotal;
        return totalMeat * womansTotal;
    }

    function childsMeatConsumption() {
        const totalMeat = childs.meatConsumption * timeTotal;
        return totalMeat * childTotal;
    }

    // Calcula consumo de Bebida por tipo de Person
    function mensDrinkConsumption() {
        const totalDrink = mens.drinkConsumption * timeTotal;
        return totalDrink * mensTotal;
    }

    function womansDrinkConsumption() {
        const totalDrink = womans.drinkConsumption * timeTotal;
        return totalDrink * womansTotal;
    }

    function childsDrinkConsumption() {
        const totalDrink = childs.drinkConsumption * timeTotal;
        return totalDrink * childTotal;
    }

    // Calcula o volume total de Carne e Bebida
    function totalMeat() {
        const totalMeat = mensMeatConsumption() + womansMeatConsumption() + childsMeatConsumption();
        return totalMeat;
    }

    function totalDrink() {
        const totalDrink = mensDrinkConsumption() + womansDrinkConsumption() + childsDrinkConsumption();
        return totalDrink;
    }

    console.log("Mens - Carne: " + mensMeatConsumption() + " Bebida: " + mensDrinkConsumption());
    console.log("Womans - Carne: " + womansMeatConsumption() + " Bebida: " + womansDrinkConsumption());
    console.log("Childs - Carne: " + childsMeatConsumption() + " Bebida: " + childsDrinkConsumption());

    console.log("Total Meat: " + totalMeat());
    console.log("Total Drink: " + totalDrink());

    // calcularBTN.style.display = "none";
    // voltarBTN.style.display = "flex";
    calcResult.style.display = "block";
    calcResult.innerHTML = `<p>Carne: ${totalMeat()} Quilos.</p> <p>Bebidas: ${totalDrink()} Litros.</p>`;
});

voltarBTN.addEventListener("click", () => {
    const voltar = voltarBTN.value;
    menInput.value = "";
    womanInput.value = "";
    childInput.value = "";
    timeInput.value = "";
    calcResult.style.display = "none";

    // calcularBTN.style.display = "flex";
    // voltarBTN.style.display = "none";
});
































// const calcMen = document.querySelector("#men");
// const calWoman = document.querySelector("#woman");
// const calcChild = document.querySelector("#child");
// const calcTime = document.querySelector("#time");
// const calcCalcular = document.querySelector("#calc");
// const calcResult = document.querySelector("#calc-result");

// class Person {
//     constructor(meat, drink) {
//         this.meat = meat;
//         this.drink = drink;
//     }
// }

// const newMen = new Person(0.450, 1.200);
// const newWoman = new Person(0.400, 1.000);
// const newChild = new Person(0.200, 0.350);

// calcCalcular.addEventListener('click', () => {

//     const qtdMen = calcMen.value;
//     const qtdWoman = calWoman.value;
//     const qtdChild = calcChild.value;
//     const qtdTime = calcTime.value;

//     // Calcula o total de Carnes
//     function totalMeat() {
//         const totalMeatMen = qtdMen * newMen.meat;
//         const totalMeatWoman = qtdWoman * newWoman.meat;
//         const totalMeatChild = qtdChild * newChild.meat
//         const totalMeat = totalMeatMen + totalMeatWoman + totalMeatChild;

//         if (qtdTime == 1) {
//             return totalMeat;
//         }
//         else if (qtdTime == 2) {
//             return totalMeat * 2;
//         } else {
//             return totalMeat * 2.7;
//         }
//     }

//     // Calcula o total de drinks
//     function totalDrink() {
//         const totalDrinkWoamn = qtdWoman * newWoman.drink;
//         const totalDrinkMen = qtdMen * newMen.drink;
//         const totalDrinkChild = qtdChild * newChild.drink;
//         const totalDrink = totalDrinkMen + totalDrinkWoamn + totalDrinkChild;

//         if (qtdTime == 1) {
//             return totalDrink;
//         }
//         else if (qtdTime == 2) {
//             return totalDrink * 2;
//         } else {
//             return totalDrink * 2.5;
//         }
//     }

//     function resultText() {
//         if (totalMeat() > 0) {
//             calcResult.classList.toggle("calc-result");
//             calcResult.innerHTML = `<p>meat: ${totalMeat()} Kilos</p> <p> drink: ${totalDrink()} Litros</p>`;

//         } else { }
//     }

//     resultText();


//     //TESTE RESULTADO TOTAL DE meatS POR Person
//     console.log("Total de meats: " + totalMeat() + " gr");
//     console.log("Total de drinks: " + totalDrink() + "ml");
//     console.log("Tempo estimado: " + qtdTime + "h");

// });

