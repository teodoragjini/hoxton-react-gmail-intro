import ActionEmail from "./ActionEmail";
import BodyEmail from "./BodyEmail";
import HeaderEmail from "./HeaderEmail";
import TittleEmail from "./TittleEmail";
import ToolbarEmail from "./ToolbarEmail";

function MainEmail(){
    return(
        <main className="email-view">

        <ToolbarEmail />
  
        <article className="email-content">
  
        <TittleEmail />
        <HeaderEmail />
        <BodyEmail />
        <ActionEmail />
  
            
            
          </article>
        </main>
    )
}

export default MainEmail