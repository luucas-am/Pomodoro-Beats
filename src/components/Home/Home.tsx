import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import "./Home.css"

function Home() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <Modal onClose={() => setShow(false)} show={show}/>
    </div>
  )
}

export default Home