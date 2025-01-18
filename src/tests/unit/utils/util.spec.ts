import { describe, it, expect, vi,beforeEach, afterEach } from 'vitest';
import { throttle, debounce } from '@/utils/util';

describe('Utils - throttle', () => {
    beforeEach(() => {
        vi.useFakeTimers(); // fake timers
    });
    
    afterEach(() => {
        vi.useRealTimers(); // real timer
    });
    
    it('should only call the function once within the delay period', () => {
        const mockFn = vi.fn();
        const throttled = throttle(mockFn, 1000);

        throttled();
        throttled();
        throttled();

        // Immediately, only the first call should happen
        expect(mockFn).toHaveBeenCalledTimes(1);

        // Wait for 1000ms
        vi.advanceTimersByTime(1000);

        throttled();
        expect(mockFn).toHaveBeenCalledTimes(2);
    });

    it('should not call the function again until the delay has passed', () => {
        const mockFn = vi.fn();
        const throttled = throttle(mockFn, 500);

        throttled();
        vi.advanceTimersByTime(300); // less than the delay
        throttled();

        expect(mockFn).toHaveBeenCalledTimes(1);

        vi.advanceTimersByTime(200); // complete the delay
        throttled();
        expect(mockFn).toHaveBeenCalledTimes(2);
    });
});

describe('Utils - debounce', () => {
    beforeEach(() => {
        vi.useFakeTimers(); // fake timers
    });
    
    afterEach(() => {
        vi.useRealTimers(); // real timer
    });

    it('should only call the function after the delay period', () => {
        const mockFn = vi.fn();
        const debounced = debounce(mockFn, 1000);

        debounced();
        expect(mockFn).toHaveBeenCalledTimes(0);

        vi.advanceTimersByTime(1000); // wait for the delay
        expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it('should reset the delay if the function is called again within the delay period', () => {
        const mockFn = vi.fn();
        const debounced = debounce(mockFn, 1000);

        debounced();
        vi.advanceTimersByTime(500); // half the delay
        debounced(); // call again before the delay completes

        vi.advanceTimersByTime(500); // another half delay
        expect(mockFn).toHaveBeenCalledTimes(0);

        vi.advanceTimersByTime(500); // complete the new delay
        expect(mockFn).toHaveBeenCalledTimes(1);
    });
});
