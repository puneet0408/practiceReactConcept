import { useEffect, useMemo, useState } from "react"

function App() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(null);

    const userType = useMemo(() => ({
        underAge: age < 18 ? true : false,
        fullName: name === "dd" ? true : false
    }),[age,name]);

    useEffect(() => {
        console.count("user type has changed");
    }, [userType])

    console.log("componentRendering");

    return (
        <div>
            <input onChange={() => setName(e.target.value)}
                placeholder="age
            " />
            <input onChange={() => setAge(e.target.value)}
                placeholder="number"
            />

        </div>
    )
}

export default App;