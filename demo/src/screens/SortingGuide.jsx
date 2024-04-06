import React, { useEffect, useState } from "react"
import BackNavbar from "../components/BackNavbar"
import { marked } from "marked" // import marked

const SortingGuide = () => {
  const [post, setPost] = useState("")

  useEffect(() => {
    import(`../content/sorting-guide/plastic.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(marked(res))) // use marked to convert Markdown to HTML
          .catch((err) => console.log(err))
      })
      .catch((err) => console.log(err))

  }, [])

  return (
    <div>
      <BackNavbar>Sorting Guide</BackNavbar>
      <div
        className="prose prose-img:w-full"
        dangerouslySetInnerHTML={{ __html: post }}
      />{" "}
      {/* render the HTML */}
    </div>
  )
}

export default SortingGuide
