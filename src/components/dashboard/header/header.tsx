import { Button } from "@/components/ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { LogOut } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-background backdrop-filter backdrop-blur-lg bg-opacity-30 border-b">
      <div className="w-full flex items-center justify-end p-4">
        <Button asChild variant="outline" aria-label="logout" title="logout">
          <LogoutLink>
            <LogOut />
            Logout
          </LogoutLink>
        </Button>
      </div>
    </header>
  );
};
export default Header;
