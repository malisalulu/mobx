import React from 'react'

export default class StaticExample extends React.Component {
    constructor() {
        super();
    }
    static sayHello (words) {
        console.log(words);
    }

    sayHello1(words) {
        console.log(words)
    }
    render() {
        return (
            <div>
                1234
            </div>
        )
    }
}