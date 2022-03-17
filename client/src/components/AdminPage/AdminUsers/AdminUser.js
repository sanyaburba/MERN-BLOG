import React from 'react';
import {Avatar, IconButton, List, ListItem, ListItemAvatar} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import useStyles from "../styles";
import {Person} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";

const AdminUser = ({user}) => {
    const classes = useStyles();

    return (
        <div className={classes.postItem}>
            <List>
                <ListItem secondaryAction={
                    <IconButton
                        edge="end"
                        aria-label="delete"
                        // onClick={deletePostButtonClick}
                    >
                        <DeleteIcon/>
                    </IconButton>
                }
                >
                    <ListItemAvatar
                        style={{cursor: 'pointer'}}
                        // onClick={openPostButtonClick}
                    >
                        <Avatar>
                            <Person/>
                        </Avatar>
                    </ListItemAvatar>
                    <Typography variant="h5">{user.email}</Typography>
                    <Typography variant="h6" color="error">{user.role}</Typography>
                    <Typography variant="h6">{user.name}</Typography>
                </ListItem>
            </List>
        </div>
    );
};

export default AdminUser;
