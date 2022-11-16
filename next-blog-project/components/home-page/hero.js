import Image from "next/image"
import classes from "./hero.module.css"

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/pepe.jpg" alt="An image showing Bram" width={300} height={300} />
      </div>
      <h1>Hi, I&apos;m Bram</h1>
      <p>I blog about web development - especially frontend frameworks like React.</p>
    </section>
  )
}

export default Hero
