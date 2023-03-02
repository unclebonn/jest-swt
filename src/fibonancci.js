export const fibonacci = input => {
    if (isNaN(input)) throw new TypeError("Input must be number!");
    if (input > 100 || input < 0) throw new TypeError("Input must from 0 to 100!");

    let Num1 = 0
    let Num2 = 1
    let Num3 = input;

    for (let i = 2; i <= input; i++) {
        Num3 = Num1 + Num2;
        Num1 = Num2;
        Num2 = Num3;
    }

    return Number(Num3);
};