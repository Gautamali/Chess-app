export const Button1=({onClick,children}:{onClick: ()=>void , children: React.ReactNode })=>{
  return(
    <button onClick={onClick} className= " px-8 py-4 bg-green-500 hover:bg-green-700 text-white font-bold rounded">
        {children}
    </button>)
}