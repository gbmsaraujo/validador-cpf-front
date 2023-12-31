import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Navbar from "../src/Components/Navbar/Navbar"


export default function Home() {
  return (
    <>
      <Head>
        <title>Validador e Gerador de CPF</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h2>Validador e Gerador de CPFs</h2>
        <p>Selecione uma das opções na barra de navegação!</p>
      </main>
      <footer className={styles.footer}>
        <p>Feito por <strong>Gabriel Araujo.</strong></p>
      </footer>
    </>
  )
}
