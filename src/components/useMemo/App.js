import React, { useState } from 'react';
 
import ExpensiveFunction from "./component"
function UseMemo() {
    const [text, setText] = useState("");
    





    console.log("component-rendering!");
    return (
        <div>
            <input
                onChange={(e) => setText(e.target.value)}
                placeholder="enter text" />
         <ExpensiveFunction/>
    </div>
    )
}

export default UseMemo;