import React from 'react';
import {
    Avatar, Divider,
    List,
    ListItem,
    ListItemAvatar, ListItemText
} from "@mui/material";
import useStyles from "../styles";
import Typography from "@material-ui/core/Typography";
import {Block, Person, SupervisedUserCircle, SupervisorAccount} from "@material-ui/icons";

const AdminUser = ({user}) => {
    const classes = useStyles();
    const emailName = `Email: ${user.email}`;

    const adminRole = user?.role === 'ADMIN';

    return (
        <List sx={{width: '100%', maxWidth: '100%', bgcolor: 'background.paper'}}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Cindy Baker"
                            src="/"
                            className={adminRole ? classes.adminAvatar : classes.userAvatar}
                            style={{
                                height: '3rem',
                                width: '3rem',
                                backgroundColor: '#ffffff',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'darkblue'
                            }}>
                        {user.name.charAt(0)}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={emailName}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{display: 'inline'}}
                                component="span"
                                variant="body2"
                                color="primary">
                                Name: {user.name}
                            </Typography>
                        </React.Fragment>
                    }/>

                <div>
                    <Typography
                        component='span'
                        color='error'>
                        {!adminRole && <Block fontSize='large'/>}
                    </Typography>
                    <Typography
                    component='span'
                    className={adminRole ? classes.adminRole : classes.userRole}>
                    {adminRole ? <SupervisorAccount fontSize='large'/> : <Person fontSize='large'/>}
                </Typography>
                </div>
            </ListItem>
            <Divider variant="inset" component="li" />

        </List>
    );
};

export default AdminUser;
