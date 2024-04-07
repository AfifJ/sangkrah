import { Link } from "react-router-dom"

const News = ({ id, children = "Title in children", icon = "" }) => {
  return (
    <Link to={`/guide/${id}`} className="flex items-center">
      <div className="mr-2 flex items-center justify-center overflow-clip rounded-full bg-blue-300">
        <div className="h-8 w-8 text-center text-2xl">🍼</div>
      </div>
      <span className="w-full">{children}</span>
      {typeof icon === "string" ? (
        <img src={icon} alt={`${icon} icon`} />
      ) : (
        icon
      )}
    </Link>
  )
}

export default News
