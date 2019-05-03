import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

const RollValue = ({Value, Type}) => (
    <div>
        {Type}: {Value}
    </div>
)

RollValue.propTypes = {
    Value: PropTypes.number,
    Type: PropTypes.string
}

export default connect(
    state => ({
        Value: state.Value,
        Type: state.Type
    })
) (RollValue)
