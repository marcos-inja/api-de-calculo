let calc = {
    mult: (n1, n2) =>{
        return parseFloat(n1) * parseFloat(n2)
    },
    soma: (n1, n2) =>{
        return parseFloat(n1) + parseFloat(n2)
    },
    sub: (n1, n2) =>{
        return parseFloat(n1) - parseFloat(n2)
    },
    div: (n1, n2) =>{
        return parseFloat(n1) / parseFloat(n2)
    },
    pot: (n1, n2) =>{
        return parseFloat(n1) ** parseFloat(n2)
    }
}

module.exports = calc