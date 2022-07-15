const multiplicationTable = n => {
  const result = []
  
  for(let i = 1; i <= n; i++) {
    const row = []
    
    for(let j = 1; j <= n; j++) {
      row.push(j*i)
    }
    
    result.push(row)
  }
  
  return result
};