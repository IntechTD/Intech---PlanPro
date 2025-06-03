import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (user === "Alessio" && pass === "Alessio") {
      toast({ title: "Accesso effettuato", description: "Benvenuto Alessio!" });
      navigate("/planning");
    } else {
      toast({ title: "Credenziali non valide", description: "Riprova", variant: "destructive" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white p-6 rounded shadow">
        <h1 className="text-xl font-bold mb-4 text-center">Accesso</h1>
        <Input placeholder="Username" value={user} onChange={(e) => setUser(e.target.value)} className="mb-4" />
        <Input type="password" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} className="mb-6" />
        <Button onClick={handleLogin} className="w-full">Accedi</Button>
      </div>
    </div>
  );
};

export default Login;
