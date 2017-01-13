import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

class App extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.counter}</h1>
                <button onClick={this.props.increment.bind(null, 10)}>INCREMENT</button>
                <button onClick={this.props.decrement.bind(null, 5)}>DECREMENT</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    counter: state.counter
})

export default connect(mapStateToProps, actionCreators)(App);