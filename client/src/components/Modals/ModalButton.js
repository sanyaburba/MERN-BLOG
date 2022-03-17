import React, {useCallback} from 'react';
import PropTypes from "prop-types";
import {styled} from "@material-ui/styles";
import {Fab} from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";

import CreateEditPostModal from "./CreateEditPostModal";
import useStyles from './styles';

const ModalButton = ({currentId}) => {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleOpen = useCallback(() => setOpen(true), []);
    const handleClose = useCallback(() => setOpen(false), []);

    const StyledFab = styled(Fab)({
        zIndex: 100,
        backgroundColor: '#000'
    });

    return (
        <div className={classes.modalButton}>
            <StyledFab
                color="secondary"
                aria-label="add"
                onClick={handleOpen}>
                <AddIcon/>
            </StyledFab>
            <CreateEditPostModal
                open={open}
                onClose={handleClose}
                currentId={currentId}/>
        </div>
    );
};

ModalButton.propTypes = {
    currentId: PropTypes.string.isRequired
};

export default ModalButton;
