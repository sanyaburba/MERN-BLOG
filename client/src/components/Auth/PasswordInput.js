import React, {useCallback, useState} from 'react';
import Input from "./Input";
import * as propTypes from "prop-types";

const PasswordInput = ({name, label, handleChange}) => {

    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = useCallback(() => setShowPassword((prevShowPassword) => !prevShowPassword), []);

    return (
        <Input
            name={name}
            label={label}
            handleChange={handleChange}
            type={showPassword ? "text" : "password"}
            handleShowPassword={handleShowPassword}/>
    );
};

PasswordInput.propTypes = {
    name: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    handleChange: propTypes.func.isRequired
};

export default PasswordInput;
