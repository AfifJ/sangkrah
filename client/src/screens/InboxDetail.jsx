import React from "react"
import BackNavbar from "../components/BackNavbar"

const InboxDetail = ({ title, content, date }) => {
  // Data dummy jika parameter tidak tersedia
  const dummyData = {
    title: "Pesan Dummy",
    content: "Ini adalah konten pesan dummy.",
    date: new Date().toLocaleDateString(),
  }

  // Menggunakan data dummy jika parameter tidak tersedia
  const messageData = {
    title: title || dummyData.title,
    content: content || dummyData.content,
    date: date || dummyData.date,
  }

  return (
    <>
      <BackNavbar>Inbox Detail</BackNavbar>
      <div className="rounded-md border border-gray-300 bg-gray-100 p-4">
        <h2 className="mb-2 text-lg font-bold">{messageData.title}</h2>
        <p className="mb-2">{messageData.content}</p>
        <p className="text-sm text-gray-600">Tanggal: {messageData.date}</p>
      </div>
    </>
  )
}

export default InboxDetail
