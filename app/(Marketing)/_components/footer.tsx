import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

  

 const Footer = () => {
    return ( 

        <div className="flex items-center w-full p-6 bg-background  dark:bg-[#1f1f1f] 
        z-50"   >
            <Logo />
           <div className="md:ml-auto w-full justify-between  
           md:justify-end flex items-center gap-x-2 text-muted-foreground" >

            <Button variant="ghost" size="sm">
                Privacy policy
            </Button>

            <Button variant="ghost" size="sm">
                Terms & Conditions
            </Button>
           </div>

        </div>



     );
 }
  
 export default Footer;