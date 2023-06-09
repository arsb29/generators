async function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        yield i;
    }
}

(async () => {
    let generator = generateSequence(1, 5);
    for await (let value of generator) {
        console.log(value); // 1, потом 2, потом 3, потом 4, потом 5
    }
})();

