/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  //let post = "강남 우동 맛집";
  
  // 자주 변경 될 것 같은 html 부분은 state로 만들어놓기
  let [posts, setPosts] = useState(["남자코트 추천","강남 우동 맛집", "파이썬 독학"]); // [state 에 보관했던 자료, state 변경 도와주는 함수]
  let [likes, addLike] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [inputValue,setInputValue] = useState('');
  
  function likeHandler(index){
    let newLikes = [...likes];
    newLikes[index] += 1;
    addLike(newLikes);
  }

  function postRegist(){
    let newPosts = [...posts];
    newPosts.push(inputValue);
    setPosts(newPosts);

    let newLikes = [...likes];
    newLikes.push(0);
    addLike(newLikes);
  }

  function deletePost(index){
    let newPosts = [...posts];
    newPosts.splice(index,1);
    setPosts(newPosts);

    let newLikes = [...likes];
    newLikes.splice(index,1);
    addLike(newLikes);
  }


  return (
    <div className="App">
      <BlackNavBar></BlackNavBar>

      {
        posts.map((post, index) => {
          return (
            <div className = "list" key = {index}>
              <h4 onClick = {() => {setModal(!modal); setTitle(index);}}>
                {post}
                <span onClick = {(e) => { 
                  e.stopPropagation();
                  likeHandler(index);
                }}>👍</span>{likes[index]}</h4>
                <p>12월 9일 발행</p>
                <button onClick = { () => { deletePost(index)}}>삭제</button>
            </div>
          )
        })
      }

           
      <div>
        <input onChange={(e) => {
          setInputValue(e.target.value);
        }}></input>
        <button onClick={() => { postRegist()}}>등록</button> 
      </div>


      {
        modal == true ? <Modal title = {title} setPosts = {setPosts} posts = {posts} ></Modal> : null 
      }

    </div>
  );
}

// const Modal = () => {
//   return (
//     <div className = "modal">
//       <h4>제목</h4>
//        <p>날짜</p>
//        <p>상세 내용</p>
//      </div>
//   )
// }


function Modal(props){
  return (
    <div className = "modal">
      <h4>{props.posts[props.title]}</h4>
      <p>날짜</p>
      <p>상세 내용</p>
      <button onClick={ () => {
        let newPost = [...props.posts];
        newPost[0] = "여자코트 추천";
        props.setPosts(newPost);

      } }>글 수정</button>
    </div>
  )
}

function BlackNavBar(){
  return (
    <div className = "black-nav">
      <h4>VIN-LOG</h4>
    </div>
  )
}



export default App;
