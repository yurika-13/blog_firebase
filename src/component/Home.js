import React, { useEffect, useState } from 'react'
import "./Home.css"
import { collection, getDocs } from "firebase/firestore";
import {db} from "../firebase"


export const Home = () => {

  const [eachData, setEachData] = useState([]);

  useEffect(() => {
    async function getPosts(){
      const data = await getDocs(collection(db, "posts"));
      // 展開したdocをそのまま確認する
      console.log(data.docs.map((doc) => ({doc})));
      // スプレット構文＋data()関数を使用するとdocsの中身を簡単に取ってこれる
      // さらに、　, 　区切りでプロパティを追加するとgetしたい属性を追加できる。(スプレット構文の知識)
      console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      const allData = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
      // setEachData(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      setEachData(allData);
    };
    getPosts();
  },[]);


  useEffect(() => {
    console.log(eachData); // ← 追加
  }, [eachData]); // ← 追加


  return (
        <div className='homePage'>
          <h1>履歴</h1>
          {eachData.map((post,index) => {
            return(
                     <div className='postedContainer' key={index}>
                     <div className='postedHeader'>
                       <h1>{post.title}</h1>
                     </div>
                     <div className='postedTextContainer'>
                       {post.postText}
                     </div>
                     <div className='nameAndDeleteButton'>
                      <h3>{post.id}</h3>
                      <button>削除</button>
                     </div>
                     </div>
            )
            })}
         </div>
  )
 }
