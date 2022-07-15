f=a=> {
  const obj = {};
  
  a.forEach(el => el in obj ? obj[el]++ : obj[el] = 1);
  const sort = Object.entries(obj).sort((a,b)=>b[1]-a[1]);
  
  return `${sort[0][0]}, ${sort[1][0]}`;
};