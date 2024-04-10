import { Link } from "react-router-dom"
import BackNavbar from "../components/BackNavbar"

const Inbox = () => {
  const messages = [
    {
      id: 1,
      user_id: 1,
      date: "2023-03-24",
      timestamp: 1679640000000, // 24 Maret 2023, 00:00:00
      content: "Ini adalah pesan pertama",
      category: "Penting",
      title: "Pesan Penting",
      read: false,
    },
    {
      id: 2,
      user_id: 2,
      date: "2023-03-23",
      timestamp: 1679553600000, // 23 Maret 2023, 00:00:00
      content: "Ini adalah pesan kedua",
      category: "Biasa",
      title: "Pesan Biasa",
      read: true,
    },
    {
      id: 3,
      user_id: 3,
      date: "2023-03-22",
      timestamp: 1679467200000, // 22 Maret 2023, 00:00:00
      content: "Ini adalah pesan ketiga",
      category: "Penting",
      title: "Pesan Penting",
      read: false,
    },
  ]

  // Mengurutkan pesan dari terbaru ke terlama
  const sortedMessages = messages.sort((a, b) => b.timestamp - a.timestamp)

  return (
    <>
      <BackNavbar>Inbox</BackNavbar>
      <div>
        {sortedMessages.map((message) => (
          <Link
            to={`/inbox/${message.id}`}
            key={message.id}
            className={`py-4 ${!message.read && "block bg-green-200 bg-opacity-70"}`}
          >
            <div className="px-6">
              <div className="flex items-center justify-between">
                <h3
                  className={`text-lg ${
                    !message.read && "line-clamp-1 font-bold"
                  }`}
                >
                  {message.title}
                </h3>
                <span className="line-clamp-1 text-gray-500">
                  {message.date}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <p className="line-clamp-1 text-muted">{message.content}</p>
                {!message.read && (
                  <div className="ml-2 h-2 w-2 rounded-full bg-green-500"></div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Inbox
