import './App.css'

function App() {

  return (
    <>
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to your dashboard!</h1>

      <h3 className="text-3xl font-bold underline">
        Coming{" "}
        <span className="relative inline-block group">
          <span className="underline group-hover:opacity-0">
            soon
          </span>
          <span className="absolute left-0 top-0 underline hover:scale-900 hover:text-[oklch(70.4%_0.191_22.216)] opacity-0 group-hover:opacity-100">
            Kessaya
          </span>
        </span>
        ..
      </h3>
    </div>
    </>
  )
}

export default App
