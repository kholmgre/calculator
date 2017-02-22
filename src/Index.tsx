import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Calculator from './Calculator';

class Index extends React.Component<any, any>{
    render(){
        return <Calculator />
    }
}

ReactDOM.render(<Index />, document.getElementById('app'));