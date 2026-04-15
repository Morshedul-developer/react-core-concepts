import './App.css'
import Count from './Count'

function App() {

  function handleClick() {
    alert('Button clicked!')
  }
  const handleClick2 = () => {
    alert('Button 2 clicked!')
  }

  return (
    <>
      <section id="center">
          <h1>Get started</h1>
          <Count></Count>
          <button onClick={handleClick}>Click 1</button>
          <button onClick={handleClick2}>Click 2</button>
          <button onClick={() => alert('Button 3 clicked!')}>Click 3</button>
      </section>
    </>
  )
}

export default App
