import { Color, PieceSymbol, Square } from "chess.js";
import { useState } from "react";
import { MOVE } from "../screens/game";

export const ChessBoard=({ chess,board,socket,setBoard}:{
  chess:any;
  setBoard:any;
  socket:WebSocket;
  board:({
    square: Square;
    type: PieceSymbol;
    color: Color;
} | null)[][]
})=>{  
  const [from,setFrom]=useState<null | Square>(null);
  const [to,setTo]=useState<null | Square>(null);

  return(
    <div className='text-white-200'>{
      board.map((row,i)=>{
        return <div key={i} className="flex">
          {row.map((square,j)=>{
            const squareRepresentation=String.fromCharCode(97+(j%8))+""+(8-i) as Square;
            return <div key={j} onClick={()=>{
              if(!from){
                setFrom(squareRepresentation);
              }
              else{
                console.log(square);
                setTo(square?.square??null);
                socket.send(JSON.stringify({
                  type:MOVE,
                  payload:{
                    move:{
                      from,
                      to
                    }
                  }
                }))
              }
              setFrom(null);
              chess.move({
                from,
                to:squareRepresentation
              });
              setBoard(chess.board);
            }} className={`w-16 h-16 ${(i+j)%2===0 ? 'bg-green-500' :'bg-white'}`}>
              
              <div className="w-full justify-center flex h-full">
                <div className="h-full  flex justify-center flex-col">
                {square ?square.type : ""}
                </div>
              </div>
            </div>
          })
          }

        </div>
      })

    }
    </div>
  )
}