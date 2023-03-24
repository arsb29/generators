export function asyncFunction(generator) {
    const iterator = generator();

    function handle({value, done}) {
        return done ? value : Promise.resolve(value)
            .then((x) => handle(iterator.next(x)))
            .catch((e) => handle(iterator.throw(e)))
    }

    return handle(iterator.next());
}

