// memoize function
function memoize(fn){
    const cache = new Map();
    return function(...args){
        const key = args.toString();
        if(cache.has(key)){
            return cache.get(key);
        }
        cache.set(key, fn(...args));
        return cache.get(key);
    }
}
function sum(a,b){
    return a+b;
}

const sumM = memoize(sum);
function time(fn){
    console.time();
    fn()
    console.timeEnd();
}
time(() => sumM(40000000, 23401233));
time(() => sumM(40000000, 23401233));
time(() => sumM(40000000, 23401233));

//Output
default: 5.204ms
default: 0.818ms
default: 0.489ms