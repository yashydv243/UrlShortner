'use client'
import { useState, useContext } from "react"
import styles from "./styles/nav.module.css"
import Link from "next/link"

const Navbar = () => {
    return <>
        <header className={styles.header}>
            <h1>{process.env.NEXT_PUBLIC_NAME}</h1>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/shortenUrls">Shortened Urls</Link>
                <Link href="/about">About</Link>
            </nav>
        </header>
    </>
}

export default Navbar