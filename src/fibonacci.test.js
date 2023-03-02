import { fibonacci } from "./fibonancci";

test('Fibonacci with well input', () => {
    expect(fibonacci("3")).toBe(2);
    expect(fibonacci("5")).toBe(5);
    expect(fibonacci(2)).toBe(2);
})

test('Fibonacci with bad input', () => {
    expect(() => fibonacci("abc")).toThrow(TypeError("Input must be number!"));
    expect(() => fibonacci("-110")).toThrow(TypeError("Input must from 0 to 100!"));
    expect(() => fibonacci("110")).toThrow(TypeError("Input must from 0 to 100!"));
    expect(() => fibonacci(-110)).toThrow(TypeError("Input must from 0 to 100!"));
    expect(() => fibonacci(110)).toThrow(TypeError("Input must from 0 to 100!"));
})

