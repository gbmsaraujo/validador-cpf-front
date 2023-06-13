import Link from "next/link"
import React from 'react'
import styles from '../../../styles/Home.module.scss'

export default function Navbar() {
  return (
    <header className={styles.ctHeader}>
      <div>
        <Link href="/"><h2>CPF Apps</h2></Link>
      </div>
        <nav>
            <ul>
                <li><Link href="/validar">Validar CPF</Link></li>
                <li><Link href="/gerar">Gerar CPF</Link></li>
            </ul>
        </nav>
    </header>
  )
}
