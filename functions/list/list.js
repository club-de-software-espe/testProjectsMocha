

const length = (array)=>{
    return array.length;
}

const evenList = (array)=>{
    return array.filter(num => num % 2==0)
}


module.exports = {
    length,
    evenList
}