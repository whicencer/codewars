f=s=>{
  let res = [];
  s.length ? s.match(/\d/g).map(el=>el-1).forEach((el, i) => {
      res[el] = s.split(' ')[i]
  }) : '';
  return res.join(' ');
};