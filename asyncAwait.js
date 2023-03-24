const url = 'https://api.github.com/orgs/nodejs';

async function fetching() {
    const response = await fetch(url);
    const json = await response.json(); // {...}
}


fetching()