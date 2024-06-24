'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true)

  const toggleForm = () => {
    setIsLogin(!isLogin)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-color1">
      <AnimatePresence mode="wait">
        {isLogin ? (
          <motion.div
            key="login"
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-color2 p-8 rounded-lg shadow-lg w-96">
              <h1 className="text-2xl font-semibold mb-4">Masuk</h1>
              <p className="mb-6">Masuk dengan akun yang telah Anda daftarkan.</p>
              <form className="flex flex-col">
                <label htmlFor="username" className="mb-2">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="p-2 mb-4 rounded bg-base text-white"
                  placeholder="Username"
                />
                <label htmlFor="password" className="mb-2">Kata sandi</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="p-2 mb-4 rounded bg-base text-white"
                  placeholder="Kata sandi"
                />
                <div className="flex justify-between items-center mb-4">
                  <label className="flex items-center">
                    <input type="checkbox" name="remember" className="mr-2"/>
                    Ingat akun ku
                  </label>
                  <a href="#" className="text-blue-500">Lupa kata sandi mu?</a>
                </div>
                <button type="button" className="p-2 mb-4 rounded bg-color1 text-white">
                  Click to verify
                </button>
                <button type="submit" className="p-2 rounded bg-base text-white">
                  Masuk
                </button>
              </form>
              <p className="mt-4">Belum memiliki akun? <a href="#" className="text-blue-500" onClick={toggleForm}>Daftar</a></p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="register"
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-color2 p-8 rounded-lg shadow-lg w-96">
              <h1 className="text-2xl font-semibold mb-4">Daftar</h1>
              <p className="mb-6">Buat akun baru untuk mulai menggunakan layanan kami.</p>
              <form className="flex flex-col">
                <label htmlFor="username" className="mb-2">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="p-2 mb-4 rounded bg-base text-white"
                  placeholder="Username"
                />
                <label htmlFor="email" className="mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="p-2 mb-4 rounded bg-base text-white"
                  placeholder="Email"
                />
                <label htmlFor="password" className="mb-2">Kata sandi</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="p-2 mb-4 rounded bg-base text-white"
                  placeholder="Kata sandi"
                />
                <button type="submit" className="p-2 rounded bg-base text-white">
                  Daftar
                </button>
              </form>
              <p className="mt-4">Sudah memiliki akun? <a href="#" className="text-blue-500" onClick={toggleForm}>Masuk</a></p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LoginPage
