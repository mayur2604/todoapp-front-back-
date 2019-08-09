import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import {
  Button,
  Container,
  Typography,
  TextField,
} from "@material-ui/core";
import DisplayList from "./DisplayList.js";
class App extends React.Component {
  componentDidMount(){
    axios.get("http://localhost:8080/items").then((res)=>{this.props.getItems(res.data)});
  }
  
  render() {
    return (
      <Container maxWidth="xs">
        <Typography variant="h3" color="primary">
          TODO APP
        </Typography>
        <br />
        <br />
        <Container item>
          <TextField
            id="standard-search"
            label="enter the item to add.."
            style={{ width: 300 }}
            value={this.props.val}
            onChange={this.props.handleChange}
          />
          <br />
          <br />
          <Button variant="contained" color="primary" onClick={this.props.addItem.bind(this,this.props.val)}>
            ADD
          </Button>
        </Container>
        <br />
    
        <Container item maxWidth="sm">
          <DisplayList
            
            items={this.props.items}
            editList={this.props.editList}
            deleteItem={this.props.deleteItem}
          />
        </Container>
      </Container>
    );
  }
}
const mapStateToProps=(state)=>{
return{
val:state.val,
items:state.items
};
};
const mapDispatchToProps=(dispatch)=>{
return{
handleChange:(e)=>{
dispatch({type:"change",val:e.target.value});
},
getItems:(data)=>{
dispatch({type:"get",data});
},
addItem:(val)=>{
axios.post("http://localhost:8080/item",{name:val})
  .then((res)=>{
    dispatch({type:"add",val:res.data});
  });
},
editList:(ind)=>{
  const name=prompt();
  axios.put("http://localhost:8080/item",{id:ind,name})
  .then((res)=>{
    dispatch({type:"edit",ind,item:{id:ind,name}});
  });
},
deleteItem:(id)=>{
  axios.delete(`http://localhost:8080/item/${id}`).then((res)=>{
    dispatch({type:"delete",ind:id});
  });
}
};
};
export default  connect(mapStateToProps,mapDispatchToProps)(App);


    

