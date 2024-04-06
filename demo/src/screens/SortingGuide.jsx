import React, { useEffect, useState } from "react"
import BackNavbar from "../components/BackNavbar"
import Markdown from "react-markdown"

const SortingGuide = () => {
  const [post, setPost] = useState("")

  useEffect(() => {
    import(`../content/sorting-guide/plastic.md`)
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
      <BackNavbar>Sorting Guide</BackNavbar>
      <div className="prose prose-img:w-full">
        <Markdown>{post}</Markdown>
      </div>
    </div>
  )
}

export default SortingGuide
