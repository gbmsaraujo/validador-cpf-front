import React, { useState } from 'react';
import Navbar from '../src/Components/Navbar/Navbar';
import styles from '../styles/Home.module.scss';
import axios from 'axios';

export default function Validar() {
	const [cpf, setCpf] = useState('');
	const [responseCpf, setResponseCpf] = useState<string>("");
	const [classValid, setClassValid] = useState<boolean>(false);

	const handleValidation = async () => {
		const { data } = await axios.post('http://127.0.0.1:8000/validar-cpf', {
			cpf: cpf,
		});

		setResponseCpf(data.message);
		setClassValid(Boolean(data.status))
		console.log(typeof classValid)
	};

	return (
		<>
			<Navbar />

			<section className={styles.validar}>
				<h2>Validador de CPF</h2>
				<div>
					<label htmlFor=''>Cole aqui seu CPF:</label>
					<input
						type='text'
						onChange={(e) => setCpf(e.target.value)}
					/>
					<button onClick={handleValidation}>Validar</button>
				</div>

					<div className={styles.resposta}>
						<p> {responseCpf} </p>
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
