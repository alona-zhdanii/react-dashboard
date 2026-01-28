import Card from "./Card"

export default function Dashboard() {
  return (
    <main className="dashboard">
      <div className="cards">
        <Card title="Revenue" value="$1,385" />
        <Card title="Orders" value="12" />
        <Card title="Reviews" value="3" />
        <Card title="Users" value="8" />
      </div>

      <div className="panel">
        <h3>Dashboard content</h3>
        <p>Here will be charts, tables or posts.</p>
      </div>
    </main>
  )
}
