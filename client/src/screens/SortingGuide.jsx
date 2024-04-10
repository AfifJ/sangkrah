import React, { useEffect, useState } from "react"
import BackNavbar from "../components/BackNavbar"
import { useParams } from "react-router-dom"
import Markdown from "react-markdown"

const SortingGuide = () => {
  const [post, setPost] = useState("")
  const { id } = useParams()

  useEffect(() => {
    import(`../content/sorting-guide/${id}.md`)
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
      <div className="h-24"></div>
    </div>
  )
}

export default SortingGuide
