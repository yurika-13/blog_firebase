import React from 'react'
import "./CreatePost.css";
import {useState} from "react";
import { addDoc, collection } from 'firebase/firestore';
import {db, auth} from "../firebase"
//投稿したらリダイレクトするように設定
import { useNavigate } from 'react-router-dom'


export const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const navigate = useNavigate();

 function getTitle(e){
    setTitle(e.target.value);
 }
 function getPostText(e){
  setPostText(e.target.value);
 }
 async function createPost(){
  if(title === ""){
    alert("タイトルを入力してください")
  }else if(postText === ""){
    alert("本文を入力してください")
  }else {
    await addDoc (collection(db,"posts"),{
      title: title,
      postText: postText,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid
      }
    })
    setTitle("");
    setPostText("");
    navigate("/");
  }
 }

  return (
    <div className='createPostPage'>
      <div className='postContainer'>
        <h1>記事を投稿する</h1>
        <div className='inputPost'>
          <div>タイトル</div>
          {/* value={title}を設定しているが、初期値空欄であるべき場合には省略もできる！ */}
          <input type="text" placeholder="タイトルを記入" value={title} onChange={getTitle}/>
        </div>
        <div className='inputPost'>
          <div>投稿</div>
          <textarea type="text" placeholder="本文を記入" value={postText} onChange={getPostText} ></textarea>
        </div>
        <button className='postButton' onClick={createPost}>投稿する</button>
      </div>
    </div>
  )
}
