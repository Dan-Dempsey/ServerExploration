// import {useEffect} from "react";
//
// useEffect(() => {
//     const API_URL = `/`
//
//     fetch(API_URL)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//     })
//         .then(data => {
//             setData(data);
//             setError(null);
//         })
//         .catch((error) => {
//             setError(error.message);
//             setData(null);
//         })
//         .finally(() => {
//             setLoading(false);
//         })
// }, []);
