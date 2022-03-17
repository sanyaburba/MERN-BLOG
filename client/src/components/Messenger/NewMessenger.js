import React, {useCallback, useEffect, useRef, useState} from 'react';
import axios from "axios";
import {io} from 'socket.io-client';

import useStyles from './styles';
import AppBar from "../AppBar/AppBar";
import Messages from "./Messages/Messages";
import Conversations from "./Conversations/Conversations";
import {Container, Divider, Fab, Grid, List, Paper, TextField} from "@mui/material";
import Typography from "@material-ui/core/Typography";
import {Send} from "@material-ui/icons";


const NewMessenger = () => {

    const classes = useStyles();

    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const socket = useRef();
    const scrollRef = useRef();

    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        socket.current = io('ws://localhost:8900');
        socket.current.on('getMessage', data => {
            //TODO set in array
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now(),
            });
        });
    }, []);

    useEffect(() => {
        arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) &&
        setMessages(prev => [...prev, arrivalMessage]);
    }, [arrivalMessage, currentChat?.members]);

    useEffect(() => {
        socket.current.emit("addUser", user.result._id);
        socket.current.on('getUsers', users => {
            console.log(users);
        });
    }, [user.result._id]);

    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await axios.get("/conversations/" + user.result._id);
                setConversations(res.data);
            } catch (e) {
                throw new Error(e.message);
            }
        };
        // eslint-disable-next-line no-console
        getConversations().catch(e => console.error(e));
    }, [user.result._id]);

    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await axios.get("/messages/" + currentChat?._id);
                setMessages(res.data);
            } catch (e) {
                throw new Error(e.message);
            }
        };
        // todo
        getMessages();
    }, [currentChat?._id]);


    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        const message = {
            sender: user.result._id,
            text: newMessage,
            conversationId: currentChat?._id
        };

        const receiverId = currentChat.members.find(member => member !== user.result._id);

        socket.current.emit('sendMessage', {
            // todo conversations id
            senderId: user.result._id,
            receiverId,
            text: newMessage
        });

        try {
            const res = await axios.post('/messages', message);
            setMessages([...messages, res.data]);
            setNewMessage('');
        } catch (e) {
            throw new Error(e.message);
        }
    }, [currentChat?._id, currentChat?.members, messages, newMessage, user.result._id]);


    const onChangeMessageField = useCallback((e) => setNewMessage(e.target.value), []);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({behavior: 'smooth'});
    });

    return (
        <>
            <AppBar/>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid
                        item
                        xs={12}>
                        <Typography
                            variant="h5"
                            className="header-message">
                            Chat
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    component={Paper}
                    className={classes.chatSection}>
                    <Grid
                        item
                        xs={3}
                        className={classes.borderRight500}>
                        <Divider/>
                        <Grid
                            item
                            xs={12}
                            style={{padding: '10px'}}>
                            <TextField
                                id="outlined-basic-email"
                                label="Search"
                                variant="outlined"
                                fullWidth/>
                        </Grid>
                        <Divider/>
                        <List>
                            {conversations.map((conv) => (
                                <div
                                    key={conv._id}
                                    onClick={() => setCurrentChat(conv)}>
                                    <Conversations
                                        // online={true}
                                        conversation={conv}
                                        currentUser={user}/>
                                </div>
                            ))}
                        </List>
                    </Grid>
                    <Grid
                        item
                        xs={9}>
                        {currentChat ?
                            <>
                                <List className={classes.messageArea}>
                                    {messages.map(mess => (
                                        <div
                                            ref={scrollRef}
                                            key={mess._id}>
                                            <Messages
                                                message={mess}
                                                own={mess.sender === user.result._id}/>
                                        </div>
                                    ))}
                                </List>
                                <Divider/>
                                <Grid
                                    container
                                    style={{padding: '2em'}}>
                                    <Grid
                                        item
                                        xs={11}>
                                        <TextField id="outlined-basic-email"
                                                   label="Type Something"
                                                   onChange={onChangeMessageField}
                                                   value={newMessage}
                                                   fullWidth/>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={1}
                                        align="right">
                                        <Fab
                                            color="primary"
                                            aria-label="add"
                                            onClick={handleSubmit}>
                                            <Send/>
                                        </Fab>
                                    </Grid>
                                </Grid>
                            </> : <Typography variant='h4'>Open a conversation to start a chat</Typography>}
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default NewMessenger;
