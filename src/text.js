import {useEffect, useState} from "react";

export const Text = () => {

    const [text, setText] = useState("");

    useEffect(() => {
        console.log("COMPONENT MOUNTED")
        return () => {
            console.log("COMPONENT UNMOUNTED")
        }
    }, [])

    return (
        <div>
            <input
                onChange={(e) => {
                    setText(e.target.value)
                }}
                type="text"/>
            <h1>{text}</h1>
        </div>
    )

}