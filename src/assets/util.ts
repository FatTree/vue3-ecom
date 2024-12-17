export function throttle (callback: Function, delay=3000) {
    let timer: NodeJS.Timeout | null = null;
    
    return function (...args: any[]) {
        if(timer) return;
        timer = setTimeout(() => {
            callback.apply(this, args);
            timer = null;
        }, delay);
    }
}


export function debounce(callback: Function, delay=3000) {
    let timer: ReturnType<typeof setTimeout>;

    return function (...args: any[]) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback.apply(this, args)
        }, delay);
    }
}