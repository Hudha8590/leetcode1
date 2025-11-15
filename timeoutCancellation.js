const cancellable=(fn,args,t)=>{
   const logs = [];
    const start = Date.now();

    const timeoutId = setTimeout(() => {
        const res = fn(...args);
        logs.push({ time: Date.now() - start, returned: res });
    }, t);

    const cancelFn = function() {
        clearTimeout(timeoutId);
    }

    return cancelFn;
}


