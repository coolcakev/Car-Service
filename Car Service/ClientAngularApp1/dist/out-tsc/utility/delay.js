export const delay = (ms, nameDelay, delay) => {
    return new Promise(resolve => {
        delay[nameDelay] = setTimeout(resolve, ms);
    });
};
//# sourceMappingURL=delay.js.map