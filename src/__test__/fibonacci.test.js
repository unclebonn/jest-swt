import { fibonacci } from "../utils/fibonancci";

test('Fibonacci with well input', () => {
    expect(fibonacci("5")).toBe(5);
    
})

test('Fibonacci with bad input', () => {
    expect(() => fibonacci("abc")).toThrow(TypeError("Input must be number!"));
    expect(() => fibonacci("-110")).toThrow(TypeError("Input must from 0 to 100!"));
    expect(() => fibonacci("110")).toThrow(TypeError("Input must from 0 to 100!"));
    expect(() => fibonacci(-110)).toThrow(TypeError("Input must from 0 to 100!"));
    expect(() => fibonacci(110)).toThrow(TypeError("Input must from 0 to 100!"));
})

