/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  //let post = "강남 우동 맛집";
  
  // 자주 변경 될 것 같은 html 부분은 state로 만들어놓기
  let [titles, modifyTitle] = useState(["남자코트 추천","강남 우동 맛집", "파이썬 독학"]); // [state 에 보관했던 자료, state 변경 도와주는 함수]
  let [likes, addLike] = useState([0,0,0]);
  let [modal, setModal] = useState(false);

  function likeHandler(index){
    let newLikes = [...likes];
    newLikes[index] += 1;
    addLike(newLikes);
  }
  return (
    <div className="App">
      <BlackNavBar></BlackNavBar>


      {
        titles.map((title, index) => {
          return (
            <div className = "list" key = {index}>
              <h4 onClick = {() => {setModal(!modal)}}>
                {title}<span onClick = {() => { 
                  likeHandler(index)
                }}>👍</span>{likes[index]}</h4>
                <p>12월 9일 발행</p>
            </div>
          )
        })
      }

        
      {
        modal == true ? <Modal ></Modal> : null 
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


function Modal(){
  return (
    <div className = "modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세 내용</p>
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
