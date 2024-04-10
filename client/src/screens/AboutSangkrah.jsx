import React, { useEffect, useState } from "react"
import BackNavbar from "../components/BackNavbar"
import Markdown from "react-markdown"

const AboutSangkrah = () => {
  const [post, setPost] = useState("")

  useEffect(() => {
    import(`../content/about.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res)) // use marked to convert Markdown to HTML
          .catch((err) => console.log(err))
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <BackNavbar link="/profile">Tentang sangkrah</BackNavbar>
      <div className="prose prose-img:w-full">
        <Markdown>{post}</Markdown>
      </div>
      <div className="h-24"></div>
    </div>
  )
}

export default AboutSangkrah
