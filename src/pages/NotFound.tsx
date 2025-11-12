import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-secondary">
      <div className="text-center animate-fade-in">
        <h1 className="mb-4 text-9xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">404</h1>
        <p className="mb-8 text-2xl text-muted-foreground">الصفحة غير موجودة / Page not found</p>
        <Link to="/">
          <Button className="rounded-full gap-2 hover:bg-primary/90 transition-all duration-300">
            <Home className="h-5 w-5" />
            العودة للرئيسية / Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
