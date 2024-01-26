import React from 'react';
import Link from "next/link";

function Navbar(props) {
    return (
        <nav>
            <Link href={'/'}>
                Home
            </Link>

            <ul>
                <li>
                    <Link href={'/about'}>
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;