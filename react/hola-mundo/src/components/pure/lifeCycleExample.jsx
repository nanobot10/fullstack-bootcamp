import React, { Component } from 'react';
import PropTypes from 'prop-types';


class LifeCycleExample extends Component {

    constructor(props) {
        super(props);
        console.log('CONSTRUCTOR')
    }

    componentWillMount() {  
        console.log('WILLMOUNT');
    }   

    componentDidMount() {   
        console.log('DIDMOUNT')
    }

    componentWillReceiveProps() {

}


    shouldComponentUpdate() {

    }

    componentWillUpdate() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }


    render() {
        return (
            <div>
                
            </div>
        );
    }
}



LifeCycleExample.propTypes = {

};


export default LifeCycleExample;
