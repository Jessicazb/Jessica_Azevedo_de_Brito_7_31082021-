import React from "react"
import axios from "axios"
import {useState} from "react"
import {useForm} from "react-hook-form"
import SendIcon from '@material-ui/icons/Send';


function NewComments (props){
 const [commentMessage, setCommentMessage] = useState("");
 const [sendButton, setSendButton]= useState(false);
 const user_id = JSON.parse(localStorage.getItem("user")).id
 const {submitHandle} = useForm()

 const onSubmit = data => {
    // axios POST
 }


 return(
    <div>
    <form onSubmit={submitHandle(onSubmit)} className="comment-form">
    <input
          type="text"
          placeholder="Écrivez un commentaire..."
          onChange={e => setCommentMessage(e.target.value)}
          value={commentMessage}
          id="input-comment"
        />
    { setSendButton &&(
     <SendIcon className="send-icon" onClick={onSubmit}/>
    )}
    </form>
     </div>
 )
}

export default NewComments;