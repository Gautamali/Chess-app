import { WebSocket } from "ws";
import { INIT_GAME, MOVE } from "./messages";
import { Game } from "./game";

export class GameManager {
  private game: Game[];
  private pendingUser:WebSocket | null;
  private User:WebSocket[];
  constructor() {
    this.game = [];
    this.pendingUser=null;
    this.User=[];
  }
  addUser(socket:WebSocket){
    this.User.push(socket);
    this.addHandler(socket);
  }

  removeUser(socket:WebSocket){
    this.User=this.User.filter(user=> user !== socket);
  }

  private addHandler(socket:WebSocket){
    socket.on("message",(data)=>{
      const message=JSON.parse(data.toString());

      if(message.type==INIT_GAME){
        if(this.pendingUser){
          const game=new Game(this.pendingUser,socket);
          this.game.push(game);
          this.pendingUser=null;
        }
        else{
          this.pendingUser=socket;
        }
      }

      if(message.type===MOVE){
        const game=this.game.find(game=> game.player1 ===socket || game.player2===socket);
        if(game){
          console.log("reached");
          game.makeMove(socket,message.payload.move);
        }
      }
    })
  }

}