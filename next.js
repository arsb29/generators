function* generator() {
    const value = yield 'one'
    yield 29 + value
}

const iterator = generator();

iterator.next(); // {value: 'one', done: 'false'}

iterator.next(2) // {value: 31, done: 'false'}

iterator.next(); // {value: undefined, done: 'true'}

