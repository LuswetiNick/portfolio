import { Button } from "@/components/ui/button";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

const Login = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center px-4">
      <Button asChild size="lg">
        <LoginLink>Login</LoginLink>
      </Button>
    </section>
  );
};
export default Login;
