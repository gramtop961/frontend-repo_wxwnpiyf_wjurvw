import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto flex gap-6 px-4">
        <Sidebar />
        <main className="flex-1 pb-16">{children}</main>
      </div>
    </div>
  )
}
