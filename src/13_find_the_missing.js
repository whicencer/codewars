findMissingLetter=arr=>{
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  const alphaBig = alpha.toUpperCase()
  const startIndex = alpha.indexOf(arr[0])
  const startIndexBig = alphaBig.indexOf(arr[0])
  
  if (arr[0].toUpperCase() === arr[0]) {
      for (let i=startIndexBig;i<=alphaBig.length;i++) {
        if (arr.indexOf(alphaBig[i])===-1) {
            return alphaBig[i]
        }
      }
  } else {
      for (let i=startIndex;i<=alpha.length;i++) {
        if (arr.indexOf(alpha[i])===-1) {
            return alpha[i]
        }
      }
  }
}