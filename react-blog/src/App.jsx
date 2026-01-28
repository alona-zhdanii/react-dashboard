import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"
import "./App.css"

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Header />
        <Dashboard />
      </div>
    </div>
  )
}
