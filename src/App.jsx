import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import Text from './components/text/Text'
import Pray from './components/pray/Pray'
import Holy from './components/holy/Holy'
import Angel from './components/angel/Angel'
import Mehel from './components/mehel/Mehel'
import Lasttext from './components/lasttext/Lasttext'
import Finishing from './components/finishing/Finishing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Banner/>
    <Text/>
     <Pray/>
     <Holy/>
     <Angel/>
     <Mehel/>
     <Lasttext/>
     <Finishing/>
    </>
  )
}

export default App
