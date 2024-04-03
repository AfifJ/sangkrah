import { useState } from "react"

const Accordion = ({ title, answer, classes, children }) => {
  const [accordionOpen, setAccordionOpen] = useState(false)
  return (
    <div className={"rounded-xl bg-white px-5 py-4 " + classes}>
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex w-full items-center justify-between"
      >
        <span className="text-start">{title}</span>
        <svg
          className="ml-8 shrink-0 fill-gray-800"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`origin-center transform transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`origin-center rotate-90 transform transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden text-sm text-base-secondary transition-all duration-300 ease-in-out ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pt-4">{answer}</div>
        </div>
      </div>
    </div>
  )
}

export default Accordion
