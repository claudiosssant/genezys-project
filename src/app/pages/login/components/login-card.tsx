import LoginForm from "./login-form-card";

const LoginCard = () => {
  return ( 
    <div className="px-12 py-4 w-3/5 h-1/2 border border-red-500 bg-slate-300">
      <main className="p-2 bg-slate-500 flex justify-center items-center">
        <LoginForm />
      </main>
    </div>
   );
}
 
export default LoginCard;