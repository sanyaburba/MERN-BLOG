import React, {useCallback, useState} from 'react';
import {TextField} from "@material-ui/core";

const Search = ({refreshFunction}) => {

    const [search, setSearch] = useState('');
    const onChangeSearch = useCallback((e) => {
        setSearch(e.currentTarget.value);
        refreshFunction(e.currentTarget.value);
        
        }, [refreshFunction]);
    
    return (
        <TextField
            name="search"
            variant="outlined"
            label="Search"
            fullWidth
            value={search}
            onChange={onChangeSearch}
        />
    );
};

export default Search;
