import React from 'react'
import Navbar from "../src/Components/Navbar/Navbar"
import styles from '../styles/Home.module.scss'

export default function Gerar() {
  return (
    <>
      <Navbar />

      <section className={styles.gerar}>
        <h2>Gerador de CPFs</h2>
        <button> Clique aqui para gerar um CPF válido</button>

        <div>
          <p>O CPF gerado foi: <strong>11122233345</strong></p>
        </div>
      </section>
      <footer className={styles.footer}>
        <p>Feito por <strong>Gabriel Araujo.</strong></p>
      </footer>
      </>
  )
}
