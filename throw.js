function* generator() {
    let choice;
    try {
        choice = yield 'one';
    } catch (e) {
        choice = e;
    }
    yield choice;
}

const iterator = generator();

iterator.next(); // {value: 'one', done: 'false'}

iterator.throw('two') // {value: 'two', done: 'false'}

iterator.next(); // {value: undefined, done: 'true'}

