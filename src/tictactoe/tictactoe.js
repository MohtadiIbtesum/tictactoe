import React, { useState } from "react";
import "./tictactoe.css";

const Tictactoe = () => {
  const [turn, setTrun] = useState("X");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState();

  const win = (squares) => {
    let combos = {
      side: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if (
          squares[pattern[0]] === "" ||
          squares[pattern[1]] === "" ||
          squares[pattern[2]] === ""
        ) {
          // do nothing
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          setWinner(squares[pattern[0]]);
        }
      });
    }
  };
  const click = (num) => {
    if (cells[num] !== "") {
      alert("Already Clicked!!");
      return;
    }
    let squares = [...cells];
    if (turn === "X") {
      squares[num] = "X";
      setTrun("O");
    } else {
      squares[num] = "O";
      setTrun("X");
    }

    win(squares);
    setCells(squares);
  };
  const handleRestart = () => {
    setWinner(null);
    setCells(Array(9).fill(""));
  };

  const Cell = ({ num }) => {
    
    return <td onClick={() => click(num)}>{cells[num]}</td>;
  };

  return (
    <>
      <div className="container">
          <h2>Tic Tac Toe</h2>Trun: {turn}
        <table>
          <tbody>
            
            <tr>
              <Cell num={0}/>
              <Cell num={1}/>
              <Cell num={2}/>
            </tr>
            <tr>
              <Cell num={3}/>
              <Cell num={4}/>
              <Cell num={5}/>
            </tr>
            <tr>
              <Cell num={6}/>
              <Cell num={7}/>
              <Cell num={8}/>
            </tr>
          </tbody>
        </table>
        {winner && (
          <>
            <p>{winner} is the winner!</p>
            <button onClick={() => handleRestart()}>Play Again</button>
          </>
        )}
      </div>
    </>
  );
};

export default Tictactoe;
