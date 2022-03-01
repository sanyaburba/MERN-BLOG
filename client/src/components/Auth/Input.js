import React from 'react';
import PropTypes from 'prop-types';
import {Grid, IconButton, InputAdornment, TextField} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import {noop} from "../../utils/noop";
import useStyles from "./styles";

const Input = ({name, half, label, handleChange, autoFocus, type, handleShowPassword}) => {

    const classes = useStyles();

    return (
        <Grid
            item
            xs={12}
            sm={half ? 6 : 12}>
            <TextField
                name={name}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                className={classes.input}
                label={label}
                autoFocus={autoFocus}
                type={type}
                InputProps={name === 'password' ? {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword}>
                                {type === 'password' ? <Visibility/> : <VisibilityOff/>}
                            </IconButton>
                        </InputAdornment>
                    ),
                } : null}
            />
        </Grid>
    );
};
//
// Input.propTypes = {
//     name: PropTypes.string.isRequired,
//     half: PropTypes.bool,
//     label: PropTypes.string.isRequired,
//     handleChange: PropTypes.func,
//     autoFocus: PropTypes.bool,
//     type: PropTypes.string,
//     handleShowPassword: PropTypes.func
// };
//
// Input.defaultProps = {
//     half: false,
//     handleChange: noop,
//     autoFocus: false,
//     handleShowPassword: noop,
//     type: noop
// };


export default Input;
