import { useNavigate } from "react-router-dom"
import { Button1 } from "../components/Button";

export const Landing=()=>{
  const navigate=useNavigate();
  return(
    <div className="">
      <div className="pt-8 max-w-screen-lg">
          <div className="grid grid-col-1 gap-4 md:grid-cols-2">
                <div className="flex justify-center">
                  <img src={"/chess-board.jpg"} className="max-w-96" />
                </div>
                <div className="pt-16">
                  <div className="flex justify-center">
                  <h1 className="text-4xl font-bold text-white">Play Chess online  </h1>
                  </div>
                  <div className="mt-8 flex justify-center">
                  <Button1 onClick={()=>{
                    navigate("/game")
                  }}>
                      Play Online
                  </Button1>
                  </div>
                </div>
    </div>
      </div>
    </div>
  )
}