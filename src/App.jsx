import { useState } from "react";

function FavoriteColor() {
     const [color, setColor] = useState("rouge");

     return (
          <>
               <button
                    type="button"
                    onClick={() => setColor("blue")}
               >Blue</button>
               <h1>Vou couleur préférée est {color}!</h1>
          </>
     )
}
function App() {
     return (
          <FavoriteColor />
     )
}

export default App