function operaciones(number1, number2, number3, number4) {
    let total = (number1 + number2) * (number3 + number4);

    if (total > 50) {
        console.log("¡El numero es mayor que 50!");
    }
    else if (total < 50) {
        console.log("¡El numero es inferior a 50!");
    }
    else {
        console.log("¡El numero es justo 50!");
    }
}