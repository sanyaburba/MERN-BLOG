import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {Avatar} from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

const Conversations = ({online, conversation, currentUser}) => {

    const [user, setUser] = useState(null);


    useEffect(() => {
        const friendId = conversation.members.find(m => m !== currentUser.result._id);

        const getUser = async () => {
            try {
                const res = (friendId);
                setUser(res);
            } catch (e) {
                alert(e.message);
            }
        };
        getUser();
    }, [conversation.members, currentUser.result._id]);


    return (
        <ListItem
            button
            key={user}>
            <ListItemIcon>
                <Avatar
                    alt={user}
                    src="/">
                    AG
                </Avatar>
            </ListItemIcon>
            <ListItemText primary={user}/>
            {online &&
                <ListItemText
                    secondary="online"
                    align="right"/>}
        </ListItem>
    );
};

Conversations.propTypes = {
    online: PropTypes.bool,
    conversation: PropTypes.object.isRequired,
    currentUser: PropTypes.object.isRequired
};

Conversations.defaultProps = {
    online: false
};

export default Conversations;
