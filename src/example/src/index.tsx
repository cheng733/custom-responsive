import React from "react";
import {render} from 'react-dom'
import { useMedia } from "../../useMedia";

const App = ()=>{

    const media  = useMedia([{ small:"(max-width: 599px)",
    medium:"(min-width: 600px) and (max-width: 1199px)",
    large:"(min-width: 1200px)"}])
    console.log(media)

    return <div>
        123
    </div>
}

render(<App/>,document.getElementById("#app"))