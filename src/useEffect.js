import {useState, useEffect} from "react";

const Component = () => {
    const [value, setValue] = useState(false)

    useEffect(() => {
        console.log('useEffect')
    })
}