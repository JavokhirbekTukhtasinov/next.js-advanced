import Link from 'next/link'
import React from 'react'

interface Props {
    children?: any
}

const Navbar: React.FC<Props> = ({children}) => {
    return (
        <div>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/lists'>Lists</Link>
        </div>
    )
}

export default Navbar
