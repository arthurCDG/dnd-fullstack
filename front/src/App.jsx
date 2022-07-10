import { useState } from "react";
import "./../src/styles/app.css";

import RoomView from "./views/room.view";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Hello</h1>
      <RoomView />
    </div>
  );
}

export default App;
