import React from 'react';
import {Box} from "@material-ui/core";
import useStyles from './styles';
import {Pagination, Stack} from "@mui/material";


const NewPagination = () => {

    const classes = useStyles();

    return (
        <Box my={4} className={classes.paginationContainer}>
            <Stack spacing={2}>
                <Pagination
                    count={10}
                />
            </Stack>
        </Box>
    );
};



export default NewPagination;
