import Head from "next/head"
import { Fragment } from "react"
import FeaturedPosts from "../components/home-page/featured-posts"
import Hero from "../components/home-page/hero"
import { getFeaturedPosts } from "../lib/posts-util"

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Bram&apos;s Blog</title>
        <meta name="description" content="I post about Pepe collections and the latest AI Pepes" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  )
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts,
    },
  }
}

export default HomePage
