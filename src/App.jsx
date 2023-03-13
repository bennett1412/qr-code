import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/Card'
import qrImg from './assets/images/image-qr-code.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Card
        imgSrc={qrImg}
        title=' Improve your front-end skills by building projects.'
        content=' Scan the QR code to visit
      Frontend Mentor and take your coding skills to the next level'
      />
    </div>
  )
}

export default App
