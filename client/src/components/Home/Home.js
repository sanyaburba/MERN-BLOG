import React, {useState} from 'react';

import PhotoBox from "../PhotoBox/PhotoBox";
import Posts from "../Posts/Posts";
import Pagination from "../Pagination/Pagination";
import {useQuery} from "../Hooks/useQuery";
import ModalButton from "../Modals/ModalButton";


const Home = () => {

    const [currentId, setCurrentId] = useState('');
    const query = useQuery();

    const searchQuery = query.get('searchQuery');

    const page = query.get('page') || '1';
    const user = JSON.parse(localStorage.getItem('profile'));


    return (
        <>
            {/*<NewAppBar/>*/}
            <PhotoBox/>
            <Posts setCurrentId={setCurrentId}/>
            {(!searchQuery) && (
                <Pagination page={page}/>
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

export default Home;
