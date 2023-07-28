export const metadata = {
    title: `${process.env.NEXT_PUBLIC_NAME} | About`
}
import styles from './about.module.css'

const About = () => {
    const year = parseInt(`${Date()[11]}${Date()[12]}${Date()[13]}${Date()[14]}`)
  return <>
        <div className={styles.main}>
            <h1>About <span>Us</span></h1>
            <p>Hi!! My name is <span>Yash Sanjay Yadav</span> and I am {year - 2009} years. I have created this web app for learning purpose. You can use this app to shoten your big urls.</p>
        </div>
  </>
}

export default About