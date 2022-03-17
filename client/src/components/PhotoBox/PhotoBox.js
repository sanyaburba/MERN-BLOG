import React from 'react';
import {Box} from "@material-ui/core";

import useStyles from './styles';

const PhotoBox = () => {

    const classes = useStyles();

    return (
        <Box className={classes.photoBox}>
            <Box>
                <span className={classes.title}>secret speaker:! blog</span>
            </Box>
            <Box>

            </Box>
        </Box>
    );
};

export default PhotoBox;
