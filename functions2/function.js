
const calculateIVA = (value) =>{
    iva = value * 0.12
    return iva.toFixed(2);
}

module.exports = {
    calculateIVA
}