import React from "react";
import { ListItem, List, ListItemText, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
export default props => {
 // props.getItems();
 // console.log(props.items);
  const items = props.items.map((value) => (
    
    <ListItem key={value.id}>
      <ListItemText key={value.id} primary={value.name} />
      <IconButton onClick={() => props.editList(value.id)}>Edit</IconButton>
      <IconButton>
        <DeleteIcon onClick={() => props.deleteItem(value.id)} />
      </IconButton>
    </ListItem>
  ));
  return <List>{items}</List>;
};

