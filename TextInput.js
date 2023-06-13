import React from "react";

import './Login.css';

function TextInput({ label, id, type, value, onChange }) {
    return (
        <div className="text-input">
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                style={{ width: "424px", height: '40px' }}
                placeholder="someone@example"
            />
        </div>

    );

}




export default TextInput