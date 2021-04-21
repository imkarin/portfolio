import { motion } from 'framer-motion';
import { useState } from 'react'

export default function Test () {
    const [isHovered, setHovered] = useState(false)
    return (
        <div>
            <motion.div 
            style = {{ background: '#ffc303', width: '100px', padding: '10px 0', textAlign: 'center',}}
            onHoverStart = {e => { setHovered(true) }}
            onHoverEnd = {e => { setHovered(false) }} >
                hover trigger
            </motion.div>

            <motion.div
            style = {{ borderRadius: '100%', background: 'red', margin: '100px' }}
            initial = { false }
            animate= {{ width: isHovered ? '200px' : '10px',
                        height: isHovered ? '200px' : '10px' }} >
                i'll animate!
            </motion.div>
        </div>
    )
}