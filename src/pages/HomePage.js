import React from 'react';
import { connect } from 'react-redux';

import actions from '../redux/actions';

class HomePage extends React.Component {

    state = { user: '' };

    componentWillMount(){
        console.log(actions);
    }

    changeUser = (name) => {
        this.props.login({ name });
    };

    inputOnChange = (event) => {
        this.changeUser(event.target.value);
    };

    loadAsyncUser = () => {
        const user = localStorage.getItem('@Template:user') ;
        console.log(user);
    };

    render() {
        const { name } = this.props.user;

        return (
            <div style={styles.container}>
                <input type='text' onChange={this.inputOnChange}/><br/>
                <span>User: {name}</span><br/>
                <span>Async User: {this.state.user}</span><br/>
                <input type='button' value={'Change User'} onClick={() => this.changeUser('dincozdemir')} /><br/>
                <input type='button' value={'Change Async User'} onClick={() => this.loadAsyncUser()} /><br/>
            </div>
        )
    }
}

const styles = {
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    }
};

const mapStateToProps = ({ sessionStore }) => {
    const { user } = sessionStore;
    return { user };
};

export default connect(mapStateToProps,{
    login: actions.login
})(HomePage);
