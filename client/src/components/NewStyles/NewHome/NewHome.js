import React, {useState} from 'react';
import NewAppBar from "../NewAppBar/NewAppBar";
import PhotoBox from "../PhotoBox/PhotoBox";
import NewPosts from "../NewPosts/NewPosts";
import NewPagination from "../NewPagination/NewPagination";
import {useQuery} from "../../Hooks/useQuery";
import ModalButton from "../Modals/ModalButton";


const NewHome = () => {

    const [currentId, setCurrentId] = useState(0);
    const query = useQuery();

    const searchQuery = query.get('searchQuery');

    const page = query.get('page') || '1';
    const user = JSON.parse(localStorage.getItem('profile'));


    return (
        <>
            <NewAppBar/>
            <PhotoBox/>
            <NewPosts setCurrentId={setCurrentId}/>
            {(!searchQuery) && (
                <NewPagination page={page}/>
            )}
            {(user?.result?.name) ?
                (
                    <ModalButton
                        currentId={currentId}
                        setCurrentId={setCurrentId}/>
                ) : (<></>)
            }
        </>
    );
};

export default NewHome;
