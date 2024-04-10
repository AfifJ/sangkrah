import { Link } from "react-router-dom"

const Guide = ({ file = "Nama file", icon = "", title }) => {
  return (
    <Link to={`/guide/${file}`} className="flex items-center">
      <div className="mr-2 flex items-center justify-center overflow-clip rounded-full bg-blue-300">
        <div className="h-8 w-8 text-center text-2xl">
          {typeof icon === "string" ? <img src={icon} alt={icon} /> : icon}
        </div>
      </div>
      <span className="w-full">{title ?? file}</span>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </Link>
  )
}

export default Guide
