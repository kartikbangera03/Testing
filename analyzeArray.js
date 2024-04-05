const analyzeArray = function(arr){
    const length = arr.length;
    const total = arr.reduce((curr,prev)=> curr + prev,0);
    const average =  total/length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return{
        average: average,
        min: min,
        max: max,
        length: length
    }

}

module.exports = analyzeArray;