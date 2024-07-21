import React from 'react'
import './App.css'
import Header from './component/Header'
import PlayBoard from './component/PlayBoard'
import Buttons from './component/Buttons'
import Explanation from './component/Explanation'

const App = () => {
  return (
    <main>
      <header>
        <Header />
      </header>

      <section >
        <PlayBoard />
        <Explanation />
      </section>

      <footer>
        <Buttons />
      </footer>
    </main>
  )
}

export default App
