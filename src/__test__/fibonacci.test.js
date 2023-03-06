import { fibonacci } from "../utils/fibonancci";

test('Fibonacci with well input', () => {
    expect(2).toBe(fibonacci("3"));
    expect(5).toBe(fibonacci("5"));
    expect(1).toBe(fibonacci(1));
})

test('Fibonacci with bad input', () => {
    expect(() => fibonacci("abc")).toThrow(TypeError("Input must be number!"));
    expect(() => fibonacci("-110")).toThrow(TypeError("Input must from 0 to 100!"));
    expect(() => fibonacci("110")).toThrow(TypeError("Input must from 0 to 100!"));
    expect(() => fibonacci(-110)).toThrow(TypeError("Input must from 0 to 100!"));
    expect(() => fibonacci(110)).toThrow(TypeError("Input must from 0 to 100!"));
})

