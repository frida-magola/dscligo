import React from 'react';

const input = props => {
    return (
        <input 
            type={props.type} 
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
            value={props.value}
            className="form-input"
        />
       
    );

}

export default input;



