import React, { useState } from 'react'
import Navbar from "../src/Components/Navbar/Navbar"
import styles from '../styles/Home.module.scss'
import axios from "axios"

export default function Gerar() {
  const [cpfGenerated, setCpfGenerated] = useState<string>("")

  const handleGenerateCpf = async ()=> {
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/gerar-cpf`)
    setCpfGenerated(data)
  }
  return (
    <>
      <Navbar />


      <section className={styles.gerar}>
        <h2>Gerador de CPFs</h2>
        <button onClick={handleGenerateCpf}> Clique aqui para gerar um CPF válido</button>

        {cpfGenerated && <div>
          <p>O CPF gerado foi: <strong>{cpfGenerated}</strong></p>
        </div>}
      </section>
      <footer className={styles.footer}>
        <p>Feito por <strong>Gabriel Araujo.</strong></p>
      </footer>
      </>
  )
}
