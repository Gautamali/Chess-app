import { useEffect,useState } from "react";

const WR_URL="ws://localhost:8080";

export const useSocket=()=>{
  const [socket,setSocket]=useState<WebSocket | null>(null);

  useEffect(()=>{
    const ws=new WebSocket(WR_URL);

    ws.onopen=()=>{
      setSocket(ws);
    }

    ws.onclose=()=>{
      console.log("disconnected");
      setSocket(null);
    }

    return ()=>{
      ws.close();
    }
  },[]);

  return socket;
}