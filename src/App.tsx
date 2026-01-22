import './App.css'
import {useState, useEffect} from "react";

function App() {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");
    const [triggerGet, setTriggerGet] = useState(false);
    const [triggerPost, setTriggerPost] = useState(false);
    const [triggerPut, setTriggerPut] = useState(false);
    const [triggerDelete, setTriggerDelete] = useState(false);

    // GET useEffect
    useEffect(() => {
        if (!triggerGet) return;

        fetch("https://server-b8s6.onrender.com/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        }).then((data) => {
            setResponse(JSON.stringify(data, null, 2));
        }).catch((error) => {
            setResponse(`Error: ${error.message}`);
        }).finally(() => {
            setTriggerGet(false);
        });
    }, [triggerGet]);

    // POST useEffect
    useEffect(() => {
        if (!triggerPost) return;

        fetch("https://server-b8s6.onrender.com/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({data: input})
        }).then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        }).then((data) => {
            setResponse(JSON.stringify(data, null, 2));
        }).catch((error) => {
            setResponse(`Error: ${error.message}`);
        }).finally(() => {
            setTriggerPost(false);
        });
    }, [triggerPost, input]);

    // PUT useEffect
    useEffect(() => {
        if (!triggerPut) return;

        fetch("https://server-b8s6.onrender.com/", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({data: input})
        }).then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        }).then((data) => {
            setResponse(JSON.stringify(data, null, 2));
        }).catch((error) => {
            setResponse(`Error: ${error.message}`);
        }).finally(() => {
            setTriggerPut(false);
        });
    }, [triggerPut, input]);

    // DELETE useEffect
    useEffect(() => {
        if (!triggerDelete) return;

        fetch("https://server-b8s6.onrender.com/", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({data: input})
        }).then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        }).then((data) => {
            setResponse(JSON.stringify(data, null, 2));
        }).catch((error) => {
            setResponse(`Error: ${error.message}`);
        }).finally(() => {
            setTriggerDelete(false);
        });
    }, [triggerDelete, input]);

    return (
        <>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <div>
                <button onClick={() => setTriggerGet(true)}>GET</button>
                <button onClick={() => setTriggerPost(true)}>POST</button>
                <button onClick={() => setTriggerPut(true)}>PUT</button>
                <button onClick={() => setTriggerDelete(true)}>DELETE</button>
            </div>
            <pre>{response}</pre>
        </>
    )
}

export default App