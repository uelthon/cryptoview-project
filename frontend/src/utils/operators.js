export const toBillion = (data) => {
  const result = data / 1000000000 ;
  return parseFloat(result).toFixed(2)
}

export const toMillion = (data) => {
  const result = data / 1000000
  return parseFloat(result).toFixed(2)
}

export const formatQuantity = (data, sub) => {
  let result = 0;
  if(data >= 1000000000){
    result = data / 1000000000 
    return `${parseFloat(result).toFixed(2)}${sub ? 'B' : 'billion'}`
  }else if (data >= 1000000) {
    result = data / 1000000
    return `${parseFloat(result).toFixed(2)}${sub ? 'M' : 'million'}`
  } else if (data >= 1000) {
    result = data / 1000
    return `${parseFloat(result).toFixed(2)}mil`
  }else{
    return `${parseFloat(result).toFixed(4)}`
  }
}
