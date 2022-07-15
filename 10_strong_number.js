const factorial = n => n<0?0:n<2?1:n*factorial(n-1);

const strong = n => n.toString().split('').map(a => factorial(a)).reduce((a,b) => a+b) == n ? 'STRONG!!!!' : 'Not Strong !!';