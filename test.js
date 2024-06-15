const { sum, cap, reverse, calc, caesarCipher, analyze } = require('./practice');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


test('capitalize first letter', () => {
    expect(cap('hello')).toBe('Hello');
});


test('reverse string order', () => {
    expect(reverse('hello')).toBe('olleh');
});

test('calculator', () => {
    expect(calc(10, '/', 5)).toBe(2);
});

test('caesarCipher message', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('analize array', () => {
    expect(analyze([1,8,3,4,2,6])).toEqual({
        minimum: 1,
        maximum: 8,
        average: 4,
        length: 6
    });
})
