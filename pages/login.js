import styles from "../styles/Login.module.css";
import LoginCard from "@/src/components/loginCard/loginCard";
import Input from "@/src/components/Input/input";
import Button from "@/src/components/button/button";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className={styles.background}>
    <LoginCard title="Faça seu login">
      <Input type="email" placeholder="Entre com seu email:"/>
      <Input type="password" placeholder="Entre com sua senha:"/>
      <Button>Entrar!</Button>
      <Link href="/cadastro">Ainda não possui Login?</Link>
    </LoginCard>
    </div>
  )
}
