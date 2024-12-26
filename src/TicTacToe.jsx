import React,{useState} from 'react'
import "./App.css";

const TicTacToe = () => {
    const[like,setLike]=useState(0)
    const[click,setClick]=useState(false)
  const surya = ()=>{
    alert("  TIC TAC TOE  ")
   }
   function likes (){
    !click?(setLike((prevLike)=>prevLike+1),alert('Thanks for your Like'),setClick(true)):alert("already liked ")
   }
  
  return (
    <div>
      <div>
        <h1
          style={{
            textAlign: "center",
            color: "violet",
            background: "black",
          }}
        >
          Tic Tac Toe
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "40px",
            gap: "10px",
            margin: "30px",
          }}
        >
          <button
            onClick={surya}
            style={{
              padding: "10px",
              background: "lightgray",
              fontSize: "15px",
              border: "2px solid black",
              borderRadius: "30px",
              cursor: "pointer",
            }}
            className="bu"
          >
            What game is this
            <br /><br />click me !
          </button>

          <button
            onClick={likes}
            style={{
              padding: "10px",
              background: "lightgray",
              fontSize: "15px",
              border: "2px solid black",
              borderRadius: "30px",
              cursor: "pointer",
            }}
            className="bu"
          >
            If you Like this Game {like}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TicTacToe