'use client'
import styles from "./surl.module.css"
import { useEffect, useState } from "react"

const SUrls = () => {
    const [urls, setUrls] = useState([])
    useEffect(() => { 
        document.title = `${process.env.NEXT_PUBLIC_NAME} | Shortened Url`
        const findUrls = localStorage.getItem("USurls")
        if (findUrls) {
            const storedUrls = JSON.parse(findUrls)
            setUrls(storedUrls)
        }
    }, [])
    const deleteUrl = async (slug) => {
        const data = {
            slug: slug
        }
        let res = await fetch("/api/deleteUrl", {
            method: "POST",
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        let response = await res.json()
        if (response.success) {
            var uUrls = []
            urls.map((e) => {
                if (e.slug == slug) {

                } else {
                    uUrls = [...uUrls, { ...e }]
                }
            })
            localStorage.setItem("USurls", JSON.stringify(uUrls))
            setUrls(uUrls)
        }else{
            alert("Something went wrong!!")
        }
    }

    return <>
        <div className={styles.main}>
            <h1>Generated Urls</h1>
            {urls.map((e) => {
                return <div className={styles.url} key={e.slug}>
                    <p>Initial Url: <span>{e.url}</span></p>
                    <p>Short Url: <span>{process.env.NEXT_PUBLIC_HOST}l/{e.slug}</span></p>
                    <div className={styles.buttons}>
                        <a target="_blank" className={styles.button} href={"l/" + e.slug}>Go To Link</a>
                        <button style={{background: 'red'}} className={styles.button} onClick={() => deleteUrl(e.slug)}>
                            Delete Url
                        </button>
                    </div>
                </div>
            })}
            {urls.length == 0 && <p>No Urls are generated</p>}
        </div>
    </>
}

export default SUrls