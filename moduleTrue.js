// moduleTrue.js
export let value;
export const promise = (async () => {
    value = await new Promise(
        res => setTimeout(res, 1000)
    );
})()


