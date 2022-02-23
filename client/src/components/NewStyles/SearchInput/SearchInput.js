import React, {useCallback} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {IconButton} from "@mui/material";
import SearchModal from "../Modals/SearchModal";


const SearchInput = () => {

    const [openModal, setOpenModal] = React.useState(false);

    const onOpenModal = useCallback(() => setOpenModal(true), []);
    const onCloseModal = useCallback(() => setOpenModal(false), []);

    return (
        <>
            <IconButton onClick={onOpenModal}>
                <SearchIcon style={{color: 'black', fontSize: '2rem'}}/>
            </IconButton>
            <SearchModal
                open={openModal}
                closeModal={onCloseModal}/>
        </>
    );
};

export default SearchInput;
