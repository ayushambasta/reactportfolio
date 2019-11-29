import React, { useEffect, useState } from "react";
import swal from '@sweetalert/with-react'

import './noteapp.css';

import editImg from '../../assets/editnew.png';
import deleteImg from '../../assets/delete.png';
import plusImg from '../../assets/plus.png';

const NotesApp = () => {

const [Items, setItems] = useState([]);
const items = [];
useEffect((props) => {
  if(localStorage.getItem('userName')){
    document.title = localStorage.getItem('userName') + " - Notes";
  }
  else {
    props.history.push("/login");
  }
  
    (async () => {
        const rawResponse = await fetch('https://notesapis.herokuapp.com/getallnote/'+localStorage.getItem('userId'), {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          // body: JSON.stringify({"userId": localStorage.getItem('userId')})
        });
        const content = await rawResponse.json();
        console.log(content)
        for (const [index, value] of content.entries()) {
          items.push(value);
        }
        setItems([...items]);
      })();
},[]);

const onClickAddNote = () => {
  swal(
    <div>
      <h2>Welcome {localStorage.getItem('userName')}!</h2>
      <input type="text" className="titleBox" name="firstname" placeholder="Title Here"></input>
      
      <textarea placeholder="Details Here! Remember, be nice!" cols="77" rows="10"></textarea>
    </div>
  )
}
const onClickEditNote = (title, details) => {
  swal(
    <div>
      <h2>Welcome {localStorage.getItem('userName')}!</h2>
      <input type="text" className="titleBox" defaultValue={title} name="firstname" placeholder="Title Here"></input>
      
      <textarea placeholder={details} cols="77" rows="10"></textarea>
    </div>,
    {
      closeOnClickOutside: false,
      buttons: {
        Cancel: {
          text: "Cancel",
          value: "cancel",
        },
        Save: {
          text: "Save",
          value: "save",
        }
      }
    }
  ).then((value) => {
    switch (value) {
 
      case "save":
        
        break;
   
      case "cancel":
        swal("Got away safely!");
        break;
   
      default:
        swal("Got away safely!");
    }
  })
}

const saveNoteToDB = (title, details) => {

    
    return true;
}

return(
    <div className="notesBody">
      <div className="hireHead"> 
              <h2>Welcome {localStorage.getItem('userName')}!</h2>
            {/* <br /> */}
            Keep Your Personal Note Online
            </div>
            <div className="noteList" >
              <div className="addNote">
                <img src={plusImg} height="55" width="55" onClick={onClickAddNote} />
              </div>
              {Items.map((value, index) => {
              return (<div className="noteWrap"><div className={"note note_" + index} key = {index}><h2>{value.title.substring(0, 88) + '....'}</h2></div>
              <div className="noteAction">
              <span className="editNote" onClick={() => onClickEditNote(value.title, value.details)}> <img src={editImg} height="15" width="15" /></span>
              <span className="deleteNote">  <img src={deleteImg} height="15" width="15" /> </span>
              </div>
              </div>);
              })}
              
            </div>
    </div>
);
}

export default NotesApp;
