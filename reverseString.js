const reverseString =  function(string){
    const strRev =  string.split('').reverse().join(''); 
    return strRev;
}

module.exports = reverseString;