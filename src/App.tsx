import './App.css'
import {useState} from "react";

function App() {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");

    const SERVER_URL = "https://server-b8s6.onrender.com/";

    const handleRequest = async (method: string) => {
        try {
            const options: RequestInit = { method };

            if (method !== 'GET' && input) {
                options.headers = {'Content-Type': 'application/json'};
                options.body = input;
            }

            const res = await fetch(SERVER_URL, options);
            const data = await res.json();
            setResponse(JSON.stringify(data, null, 2));
        } catch (error) {
            setResponse(`Error: ${(error as Error).message}`);
        }
    };

    return (
        <>
            <div>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>
            <div>
                <button onClick={() => handleRequest("GET")}>GET</button>
                <button onClick={() => handleRequest("POST")}>POST</button>
                <button onClick={() => handleRequest("PUT")}>PUT</button>
                <button onClick={() => handleRequest("DELETE")}>DELETE</button>
            </div>
            <p>{response}</p>
        </>
    )
}

export default App