import React from "react"
import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="mx-auto max-w-md text-center">
        <h1 className="mb-4 text-9xl font-bold text-gray-800">404</h1>
        <p className="mb-8 text-2xl font-semibold text-gray-700">
          Oops! Halaman yang Anda cari tidak ditemukan.
        </p>
        <Link
          to={"/"}
          className="inline-block rounded-md bg-primary px-6 py-3 font-semibold text-white transition duration-300 hover:bg-primary-focus"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
