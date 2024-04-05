const capitalize =  require("./capitalize.js");

test('First Letter Capital', ()=>{
    const testString = capitalize("kryptonite");
    // console.log(testString);
    const firstLetter =testString.charCodeAt(0);
    expect(firstLetter).toBeGreaterThanOrEqual(65);
    expect(firstLetter).toBeLessThanOrEqual(90);
    
});

const reverseString = require("./reverseString.js");
const ogString = "Kryptonite";
let reversedStringCalc = "";
    for(let i=ogString.length-1;i>=0;i--){
        reversedStringCalc += ogString[i];
    }
const receivedReverseString  = reverseString(ogString);



test('Reverse String ', ()=>{    
    expect(receivedReverseString).toBe(reversedStringCalc);
});


const calculator =  require("./calculator.js");

test('Check Addition',()=>{
    expect(calculator.add(1,2)).toBe(3);
});

test('Check Subtraction',()=>{
    expect(calculator.subtract(1,2)).toBe(-1);
});

test('Check Division',()=>{
    expect(calculator.divide(1,2)).toBe(0.5);
});

test('Check Multiplication',()=>{
    expect(calculator.multiply(1,2)).toBe(2);
});


const ceasarCipher = require("./caesarCipher.js");

test('Check Caesar Cipher', ()=>{
    expect(ceasarCipher("xyz",2)).toBe("ZAB");
    expect(ceasarCipher("xyz12/",2)).toBe("ZAB12/");
    expect(ceasarCipher("xyz12/",4)).toBe("BCD12/");

    
});


const analyzeArray = require("./analyzeArray.js");

test('Analayze Array Test', ()=>{
    const result = analyzeArray([1,8,3,4,2,6]);
    expect(result.average).toBe(4);
    expect(result.min).toBe(1);
    expect(result.max).toBe(8);
    expect(result.length).toBe(6);

});