import React from 'react'

export default class ButtonShoeStore extends React.Component {

    render() {
        const {name, } = this.props;
        return (
            <button {...this.props}>
                {name}
            </button>
        );
    }
}