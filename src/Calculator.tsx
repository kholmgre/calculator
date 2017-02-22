import * as React from 'react';

class InputView extends React.Component<any, any> {
    render() {

        if (this.props.input.length == 0) {
            return <div></div>
        }

        return (
            <div>
                <div>
                    {this.props.input.reduce((acc: any, val: any) => {
                        if (val === '+' || val === '-') {
                            return acc + ' ' + val
                        } else {
                            if (acc.charAt(acc.length - 1) === '-' || acc.charAt(acc.length - 1) === '+') {
                                return acc + ' ' + val;
                            } else {
                                return acc + val;
                            }
                        }
                    })}
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div>{this.props.result}</div>
                </div>
            </div>
        )
    }
}

class Numbers extends React.Component<any, any> {
    render() {

        let generateInputElements = (numbers: Array<any>) => {
            let mapped = numbers.map((a: Array<number>, i: number) => {

                let createElementFromNumber = (n: number) => {
                    return <input type="button" key={n} className="number_button" onClick={() => { this.props.onNumberClick(n) }} value={n} />
                }

                let elements = a.map((n: number) => { return createElementFromNumber(n) });

                return <div className="button_row" key={i}>{elements}</div>;
            });


            return <div>{mapped}</div>;
        }

        let numbersArr = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]];

        let numbers = generateInputElements(numbersArr);

        return (
            <div className="numbers">
                {numbers}
            </div>
        )
    }
}

class Calculator extends React.Component<any, any>{
    operations: Object;
    constructor() {
        super();
        this.state = {
            input: [],
            finished: false,
            result: 0
        }
    }
    reset() {
        this.setState({ input: [], finished: false, result: 0 })
    }
    result() {
        let result = eval(this.state.input.reduce((acc: string, val: string) => {
            if (val === '+' || val === '-') {
                return acc + ' ' + val
            } else {
                return acc + val;
            }
        }));

        this.setState({ result: result, finished: true })
    }
    input(str: string) {
        if (this.state.finished === true) {
            this.reset();
        }

        this.setState({ input: this.state.input.concat([str.toString()]) });
    }
    render() {
        return (
            <div>
                <InputView input={this.state.input} result={this.state.result} />
                <Numbers onNumberClick={this.input.bind(this)} />
                <div className="button_row">
                    <input type="button" className="number_button" value="=" onClick={this.result.bind(this)} />
                    <input type="button" className="number_button" value="+" onClick={() => { this.input("+") }} />
                    <input type="button" className="number_button" value="-" onClick={() => { this.input("-") }} />
                    <input type="button" className="number_button" value="C" onClick={() => { this.reset() }} />
                </div>
            </div>);
    }
}

export default Calculator;