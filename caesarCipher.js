
const capitalize =  function(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const reverseString =  function(string){
    const strRev =  string.split('').reverse().join(''); 
    return strRev;
}

const calculator  = {
    add: function(a,b){
        return a+b;
    },
    subtract: function(a,b){
        return a-b;
    },
    divide: function(a,b){
        return a/b;
    },
    multiply: function(a,b){
        return a*b;
    }
}

const ceasarCipher =  function(string , shiftFactor){
    let stringCode = [];
    for(let i=0;i<string.length;i++){
        const charCode = string.charCodeAt(i);
        if( charCode< 97){
            stringCode.push(charCode+32);
        }else{
            stringCode.push(charCode);
        }
    }

    let encryptedString = stringCode.map((code)=>{
        return code + shiftFactor;
    });

    return String.fromCharCode(encryptedString);


}

module.exports = ceasarCipher;
