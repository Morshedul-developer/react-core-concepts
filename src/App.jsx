import { Suspense } from 'react';
import './App.css'
import Count from './Count'
import Users from './Users'

const fetchData = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

function App() {

  // function handleClick() {
  //   alert('Button clicked!')
  // }
  // const handleClick2 = () => {
  //   alert('Button 2 clicked!')
  // }

  const data = fetchData();

  return (
    <>
      <section id="center">
          <h1>Get started</h1>
          <Suspense fallback={<h3>Loading...</h3>}>
            <Users data={data}></Users>
          </Suspense>
          {/* <Count></Count>
          <button onClick={handleClick}>Click 1</button>
          <button onClick={handleClick2}>Click 2</button>
          <button onClick={() => alert('Button 3 clicked!')}>Click 3</button> */}
      </section>
    </>
  )
}

export default App
