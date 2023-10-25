import Link from "next/link";
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useState } from 'react';

import styles from "../styles/Cadastro.module.css";

import LoginCard from "@/src/components/loginCard/loginCard";
import Input from "@/src/components/Input/input";
import Button from "@/src/components/button/button";

export default function CadastroPage() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    telefone: '',
    password: ''
  })
  
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChangeForm = (event, field) => {
    setForm({
      ...form,
      [field]: event.target.value
    })
  }

  const handleForm = async (e) => {
    e.preventDefault();

    if (!form.name) return setError('O nome é obrigatório');
    if (!form.email) return setError('O e-mail é obrigatório');
    if (!form.telefone) return setError('O telefone é obrigatório');
    if (!form.password) return setError('a senha é obrigatório');

    setError('');
    try {
      const response = await fetch(`/api/user/cadastro`, {
        method: 'POST',
        body: JSON.stringify(form)
      });

      const json = await response.json();

      if (response.status !== 200) throw new Error(json);
      setCookie('authorization', json);
      router.push('/');
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className={styles.background}>
      <LoginCard title="Crie sua conta">
      <form className={styles.form}>
      <Input type="email" placeholder="Cadastrar email:" value={form['email']} onChange={(event) => handleChangeForm(event, 'email')}/>
      <Input type="text" placeholder="Cadastrar nome:" value={form['name']} onChange={(event) => handleChangeForm(event, 'name')}/>
      <Input type="tel" placeholder="Cadastrar número de celular:" value={form['telefone']} onChange={(event) => handleChangeForm(event, 'telefone')}/>
      <Input type="password" placeholder="Cadastrar senha:" value={form['password']} onChange={(event) => handleChangeForm(event, 'password')}/>
      <Button onClick={handleForm}>Cadastrar!</Button>
      {error && <p className="error">{error}</p>}
      <Link href="/login">Já possui Login?</Link>
      </form>
      </LoginCard>
    </div>
  )
}
