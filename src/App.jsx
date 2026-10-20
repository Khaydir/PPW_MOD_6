import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

const NAMA_PANGGILAN = 'khaydir'
const N = 17
const gayaJudul = {color: '#1F3A5F', fontSize: '28px'}

function App() {
  const jam = 9

  return (
    <>
    <h1 className="judul" style={gayaJudul } >
      kantin {NAMA_PANGGILAN}
    </h1>
    <p> {jam < 12 ? 'selamat pagi' : 'selamat siang'}</p>
    <p> saldo awal kartu kantin : rp{N * 1000}</p>
    <button disabled>bayar </button>
    </>
      
  )
}

export default App
