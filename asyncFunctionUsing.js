const url = 'https://api.github.com/orgs/nodejs';

asyncFunction(function* () {
    const response = yield fetch(url);
    const json = yield response.json(); // {...}
})

