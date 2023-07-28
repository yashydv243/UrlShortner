'use client'

import { useEffect } from "react"

const Slug = ({ params }) => {
    const getUrl = async () => {
        const data = {
            slug: params.slug
        }
        let res = await fetch("/api/findUrl", {
            method: "POST",
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        let response = await res.json()
        if (response.success) {
            window.location = response.url
        } else {
            alert("Invalid Url")
        }
    }
    useEffect(() => {
        getUrl()
    }, [])

    return <>
        <div className="redirector">

            Redirecting....
        </div>
    </>
}

export default Slug