
const palindrome = require('./palindrome');

test('check palindrome', ()=>{
    expect(palindrome('mom')).toBe(true);
})

test('check palindrome with falsy value', ()=>{
    expect(palindrome('paulos')).toBe(false);
})

test('check palindrome with caps letter', ()=>{
    expect(palindrome('maDAm')).toBe(true);
})

test('check palindrome with caps letter', ()=>{
    expect(palindrome('abcba')).toBe(true);
})