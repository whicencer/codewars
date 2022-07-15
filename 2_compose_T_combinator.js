const compose = (arg, ...funcs) => funcs.reduce((acc, fn) => fn(acc), arg);