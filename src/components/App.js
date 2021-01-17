import React, {useState, useEffect} from "react"; 

function App() {
    const [defaultPic, setDefaultPic] = useState(null);
    
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((resp) => resp.json())
        .then((data) => {setDefaultPic(data.message)
        });
    }, []);

    if (!defaultPic) return <p>Loading...</p>

    return (
            <img src={defaultPic} alt="A Random Dog" />
    )
}

export default App;