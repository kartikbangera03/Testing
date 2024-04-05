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
    console.log(stringCode);
    let encryptedString = stringCode.map((code)=>{
        return code + shiftFactor;
    });
    console.log(encryptedString);

    let text =  String.fromCharCode(...encryptedString);
    console.log(text);
    return text;
}

console.log(ceasarCipher('HELLO',7));