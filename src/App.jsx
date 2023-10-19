import React from "react";
import Header from "./components/Header";
import EmojiDis from "./components/EmojiDis";
import datas from "./components/Data";

function App() {

  return (
    <>
      <Header />
      {datas.map((data) => {
        return (
          
            <EmojiDis 
              emoji={data.emoji}
              description={data.description}
              category={data.category}
              
            />
          
        )
      })}
    </> 
  )
}

export default App
