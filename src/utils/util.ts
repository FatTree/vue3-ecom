export function throttle(callback: Function, delay: number) {
    let lastTime = 0;

    return function (...args: any[]) {
        const now = Date.now();
        if (now - lastTime >= delay) {
            callback(...args);
            lastTime = now;
        }
    };
}


export function debounce(callback: Function, delay=3000) {
    let timer: ReturnType<typeof setTimeout>;

    return function (...args: any[]) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback.apply(undefined, args)
        }, delay);
    }
}