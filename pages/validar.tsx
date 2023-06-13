import React from 'react';
import Navbar from '../src/Components/Navbar/Navbar';
import styles from '../styles/Home.module.scss'

export default function Validar() {
	return (
		<>
			<Navbar />

			<section className={styles.validar}>
				<h2>Validador de CPF</h2>
				<div>
					<label htmlFor=''>Cole aqui seu CPF:</label>
					<input type='text' />
					<button>Validar</button>
				</div>

				<div className={styles.valido}>
					<p>O CPF xxx é Válido</p>
				</div>

			</section>
			<footer className={styles.footer}>
				<p>
					Feito por <strong>Gabriel Araujo.</strong>
				</p>
			</footer>
		</>
	);
}
