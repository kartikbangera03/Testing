const ceasarCipher =  function(string , shiftFactor){
    let stringCode = [];
    for(let i=0;i<string.length;i++){
        const charCode = string.charCodeAt(i);
        
        if((charCode >= 97 && charCode<=122)){
            stringCode.push(charCode - 32);
        }else{
            stringCode.push(charCode);
        }
    }    
    
    
    let encryptedStringArr = [];
    for(let i=0; i<stringCode.length;i++){

        if(stringCode[i] >= 65 && stringCode[i]<=90)
        {
            const value = stringCode[i] + shiftFactor <= 90 ? stringCode[i] + shiftFactor : 64 + (stringCode[i] + shiftFactor-90);
            encryptedStringArr.push(value);
        }else{
           encryptedStringArr.push(stringCode[i]);
       }
    }    

    
    // console.log(stringCode);
    // console.log(encryptedStringArr);
    // console.log(String.fromCharCode(...encryptedStringArr));
    return String.fromCharCode(...encryptedStringArr);


}

module.exports= ceasarCipher;
