import React, { useState } from 'react'
import "./Home.css"

function Home() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

export default Home