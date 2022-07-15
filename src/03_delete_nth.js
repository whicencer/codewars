function deleteNth(arr,n){
  const repeats = {}
  
  return arr.filter((number) => {
    repeats[number] ? repeats[number] += 1 : repeats[number] = 1
    
    return repeats[number] <= n
  })
  
}