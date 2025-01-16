import { Button } from "@/components/ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { LogOut } from "lucide-react";

const Header = () => {
  return (
    <div>
      <Button asChild variant="outline" aria-label="logout" title="logout">
        <LogoutLink>
          <LogOut />
          Logout
        </LogoutLink>
      </Button>
    </div>
  );
};
export default Header;
