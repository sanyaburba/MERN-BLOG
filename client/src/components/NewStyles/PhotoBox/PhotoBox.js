import React from 'react';
import {Box} from "@material-ui/core";
import useStyles from './styles';

import blm from '../../../images/blm.png';

const PhotoBox = () => {

    const classes = useStyles();

    return (
        <Box className={classes.photoBox}>
            <Box>
                Black Lives Matter
            </Box>
            <Box>
                <img
                    src={blm}
                    alt="Awesome blog"
                    height="200"
                />
            </Box>
        </Box>
    );
};

export default PhotoBox;
