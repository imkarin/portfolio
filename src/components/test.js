import { motion } from 'framer-motion';
import { useState, useEffect } from 'react'

const Test = props => {
    return (
        <button
         style = {{ cursorEvents: 'none', cursor: 'none', background: 'cyan', padding: '10px' }}
         onMouseEnter =  { props.mouseEnterHandler }
         onMouseLeave = {props.mouseLeaveHandler }>
            Hover me!
        </button>
    )
}

export default Test