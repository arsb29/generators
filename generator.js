function* generator() {
    yield 'one'
    yield 'two'
}

const iterator = generator();

iterator.next(); // {value: 'one', done: 'false'}

iterator.next(); // {value: 'two', done: 'false'}

iterator.next(); // {value: undefined, done: 'true'}

