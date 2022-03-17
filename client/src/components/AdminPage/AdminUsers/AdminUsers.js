import React from 'react';
import {CSSTransition} from "react-transition-group";
import AdminUser from "./AdminUser";
import useStyles from '../styles';

const AdminUsers = ({users}) => {

    const totalUsers = users?.length;
    const classes = useStyles();

    return (
        <>
            <span className={classes.totalTitle}>Total users: {totalUsers}</span>
            {users?.map((user) => <CSSTransition
                key={user._id}
                timeout={500}
                classNames="post"
            >
                <AdminUser user={user}/>
            </CSSTransition>)}
        </>
    );
};

export default AdminUsers;
