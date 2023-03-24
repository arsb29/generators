const iterator = ['one', 'two'][Symbol.iterator]();

iterator.next(); // {value: 'one', done: 'false'}

iterator.next(); // {value: 'two', done: 'false'}

iterator.next(); // {value: undefined, done: 'true'}

