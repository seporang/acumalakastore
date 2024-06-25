'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'

const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const toggleForm = () => {
    setIsLogin(!isLogin)
    setError(null)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      if (isLogin) {
        const response = await axios.post('/api/login', form)
        console.log('Login berhasil', response.data)
      } else {
        const response = await axios.post('/api/register', form)
        console.log('Registrasi berhasil', response.data)
      }
      window.location.href = 'https://youtu.be/KaFqWGyWC7c'
    } catch (err) {
      setError(err.response?.data?.error || 'Terjadi kesalahan yang tidak terduga')
      setLoading(false)
    }
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
              <form className="flex flex-col" onSubmit={handleSubmit}>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <label htmlFor="email" className="mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="p-2 mb-4 rounded bg-base text-white"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                />
                <label htmlFor="password" className="mb-2">Kata sandi</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="p-2 mb-4 rounded bg-base text-white"
                  placeholder="Kata sandi"
                  value={form.password}
                  onChange={handleChange}
                />
                <div className="flex justify-between items-center mb-4">
                  <label className="flex items-center">
                    <input type="checkbox" name="remember" className="mr-2"/>
                    Ingat akun ku
                  </label>
                  <a href="#" className="text-blue-500">Lupa kata sandi mu?</a>
                </div>
                <button type="submit" className="p-2 rounded bg-base text-white" disabled={loading}>
                  {loading ? 'Memuat...' : 'Masuk'}
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
              <form className="flex flex-col" onSubmit={handleSubmit}>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <label htmlFor="email" className="mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="p-2 mb-4 rounded bg-base text-white"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                />
                <label htmlFor="password" className="mb-2">Kata sandi</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="p-2 mb-4 rounded bg-base text-white"
                  placeholder="Kata sandi"
                  value={form.password}
                  onChange={handleChange}
                />
                <button type="submit" className="p-2 rounded bg-base text-white" disabled={loading}>
                  {loading ? 'Memuat...' : 'Daftar'}
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
