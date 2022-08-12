export const delay = (ms, delay) => {
    return new Promise(resolve => {
        delay.delayId = setTimeout(resolve, ms);
    });
};
//# sourceMappingURL=delay.js.map