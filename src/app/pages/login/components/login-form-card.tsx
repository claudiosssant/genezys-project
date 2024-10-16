import Link from "next/link";

const LoginForm = () => {
  return ( 
    <div>
      <form className="flex flex-col">
          <p>Usuário</p>
          <input type="text" name="" id="" />
          <p>Senha</p>
          <input type="password" name="" id="" />
          <Link href="google.com">
            <p>Esqueci a senha</p>
          </Link>
          <button className="px-6 py-4 bg-green-700">
            Entrar
          </button>
        </form>
    </div>
   );
}
 
export default LoginForm;