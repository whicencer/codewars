function isIntArray(arr) {
  if(arr && arr.every(el => Number.isInteger(el)) && arr.every(el => !isNaN(el))) {
    return true
  }
  return false
}