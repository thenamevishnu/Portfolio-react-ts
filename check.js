var dayOfYear = function(date) {
    const d = new Date(date)
    let sum = 0
    const days = [31,leap(d.getFullYear()),31,30,31,30,31,31,30,31,30,31]
   
    for(let month=0;month<d.getMonth();month++){
        sum += days[month]
    }
    
    return sum + d.getDate()
};

function leap(year) {
    if(year % 4 === 0){
        if(year % 100 === 0 && !(year % 400 === 0)){
            return 28
        }
        return 29
    }else{
        return 28
    }
}

console.log(dayOfYear("2004-03-01"));