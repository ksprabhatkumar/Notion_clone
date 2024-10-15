import { Header } from "./_components/header";
import Heros from "./_components/Heros";

 const Marketingpage = () => {
  return ( 
    <div className="min-h-full flex flex-col " >
     <div className="flex flex-col items-center justify-center 
       md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
    <Header />
    <Heros />
     </div>
    </div>
   );
 }
  
 export default Marketingpage;