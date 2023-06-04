import { useState } from "react"

const Count = () => {
    const [state, setState] = useState(0)
    return <button onClick={()=> setState((prev)=> prev + 1)}>{state}</button>
}

export default Count