import LoginCard from "@/src/components/loginCard/loginCard";
import styles from "../styles/Login.module.css";
import Input from "@/src/components/Input/input";
import Button from "@/src/components/button/button";
import Link from "next/link";

export default function CadastroPage() {
  return (
    <div className={styles.background}>
      <LoginCard title="Crie sua conta">
      <Input type="email" placeholder="Cadastrar email:"/>
      <Input type="text" placeholder="Cadastrar nome:"/>
      <Input type="tel" placeholder="Cadastrar número de celular:"/>
      <Input type="password" placeholder="Cadastrar senha:"/>
      <Input type="password" placeholder="Repetir senha:"/>
      <Button>Cadastrar!</Button>
      <Link href="/login">Já possui Login?</Link>
      </LoginCard>
    </div>
  )
}
