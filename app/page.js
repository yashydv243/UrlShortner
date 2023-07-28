'use client'
import styles from './page.module.css'
import { useEffect, useState } from 'react'

export default function Home() {
  const [url, setUrl] = useState("")
  const [slug, setSlug] = useState("")
  const [generateUrl, setGenerateUrl] = useState({ status: false, urlS: false })
  useEffect(() => {
    document.title = `${process.env.NEXT_PUBLIC_NAME} | Home`
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      url,
      slug
    }
    let res = await fetch("/api/generateUrl", {
      method: "POST",
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    let response = await res.json()
    if (response.success) {
      setGenerateUrl({ status: true, url: response.url })
      const storedUrls = localStorage.getItem("USurls")
      if (!storedUrls) {
        const urlToSave = await [{ ...response.url }]
        localStorage.setItem("USurls", JSON.stringify(urlToSave))
      } else {
        const storedUrlsFormat = JSON.parse(storedUrls)
        const urlToSave = [...storedUrlsFormat, { ...response.url }]
        localStorage.setItem("USurls", JSON.stringify(urlToSave))
      }
    } else {
      setGenerateUrl({ status: false, urlS: true })
    }
  }
  return <>
    <form className={styles.main} onSubmit={handleSubmit}>
      <p>Make your Urls short with this website</p>
      <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} className={styles.url} required placeholder='Url' />
      <div className={styles.slugDiv}>
        <span>{process.env.NEXT_PUBLIC_HOST}l/</span><input value={slug} onChange={(e) => setSlug(e.target.value)} placeholder='Slug' type="text" required />
      </div>
      <button type="submit">Short Url</button>
      {generateUrl.status && <p>Generated Url: <a href={process.env.NEXT_PUBLIC_HOST +'l/'+ generateUrl.url.slug} target='_blank'>{process.env.NEXT_PUBLIC_HOST +'l/'+ generateUrl.url.slug}</a></p>}
      {!generateUrl.status && generateUrl.urlS ? <p>Error (Slug already exist)</p> : ""}
    </form>
  </>
}
