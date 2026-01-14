import './App.css'
import './javascript.js'
import {useEffect, useState} from "react";
function App() {
    const [putInput, setPutInput] = useState("");
    useEffect(() => {

    })

    const [postInput, setPostInput] = useState("");
    useEffect(() => {

    })

    const [deleteInput, setDeleteInput] = useState("");
    useEffect(() => {

    }, []);
  return (
    <>
      <div id="serverRequests">
          <div className="inputButton">
              <button id="getButton" onClick={() => {}}>
                  GET
              </button>
          </div>
          <div className="inputButton">
          <input id="putInput"/>
              <button id="putButton" onClick={() => setPutInput}>
                  PUT
              </button>
          </div>
          <div className="inputButton">
              <input id="postInput"/>
              <button id="postButton" onClick={() => setPostInput}>
                  POST
              </button>
          </div>
          <div className="inputButton">
              <input id="deleteInput"/>
              <button id="deleteButton" onClick={() => setDeleteInput}>
                  DELETE
              </button>
          </div>
      </div>
    </>
  )
}

export default App
