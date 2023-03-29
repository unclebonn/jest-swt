export const fibonacci = input => {
    input = Number(input);

    // Kiểm tra có phải là số không
    if (isNaN(input)) throw new TypeError("Input must be number!");

    // Kiểm tra giá trị nhập vào 
    if (input > 100 || input < 0) throw new TypeError("Input must from 0 to 100!");

    // Kiểm tra phải là số nguyên
    if (!Number.isInteger(input)) throw new TypeError("Input must be integer!");

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