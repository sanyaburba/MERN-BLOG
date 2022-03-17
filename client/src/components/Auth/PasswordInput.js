import React, {useCallback, useState} from 'react';
import PropTypes from "prop-types";
import Input from "./Input";

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
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};


export default PasswordInput;
