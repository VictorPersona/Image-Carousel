import { useState } from 'react'
import data from './assets/images.json'
import Image from './components/Image'
import './App.css'

function App() {
  // let imageArray = data.images.map((image, index) => {
  //   return { image: image, id: index }
  // })

  const mainImage = data.images.map((image, index) => {
    return <Image img={image} id={index} key={index} />
  })

  // const [image, setImage] = useState(mainImage)
  const placeholder = (
    <img src="https://wallpapers-clan.com/wp-content/uploads/2023/10/pokemon-eevee-aesthetic-night-desktop-wallpaper-preview.jpg" />
  )

  const [currentImage, setCurrentImage] = useState(placeholder)

  return <>{currentImage}</>
}

export default App
