export const formatPrice = (priceNum) => {
    return new Intl.NumberFormat('pl-PL', {
        style: 'currency',
        currency: 'PLN',
    }).format(priceNum / 100)
}

export const getUniqueValues = ( data, type ) => {
    let uniqe = data.map((item) => item[type])
    
    if(type === 'colors'){
        uniqe = uniqe.flat()
    }

    return ['all', ...new Set(uniqe)]
}
