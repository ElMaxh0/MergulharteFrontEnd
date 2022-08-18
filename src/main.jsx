import { ContentBoxStyle } from "./assents/globalStyles/ContentContainer";
import AboutMe from "./components/about/me";
import { Bot } from "./components/chat";
import { PackIDConfigForm } from "./components/config/packForm/form";
import { Footer } from "./components/footer/footer";
import ImersiveRoom from "./components/imersion/3D/appImersive";
import Mergulharte from "./components/imersion/3D/landScape";
import { SliderApp } from "./components/imersion/imageSlider/analitcs";
import ImageSlider from "./components/imersion/imageSlider/ImageSlider";
import LoguinUi from "./components/login/login";
import RegistrerUi from "./components/login/registrer";
import Menu from "./components/menu/menu";
import { TopMenu } from "./components/menu/topmenu";
import { AccountInfo } from "./components/MyAccountInfo/account";
import { Home } from "./components/wellcome/wellcome";
import { useBackground } from "./hooks/background";
import { useLoginStatuns } from "./hooks/statusLogin";
import { useUserPage } from "./hooks/userPage";


export default function Main(){
    const {LoginStatuns, setLoginStatuns} = useLoginStatuns();
    const {UserPage, setUserPage} = useUserPage()
    const {bgid, setbgid} =useBackground()
    if(LoginStatuns == 1){
        switch(UserPage){
            case 1 :
                var Page =(<>
                <div>
                    <Home />
                </div>
                </>)
                break
            case 2 :
                setbgid(1)
                    var Page = (
                        <div>
                            <PackIDConfigForm />
                        </div>
                    )
                    break
            case 3 :
                setbgid(4)
                    var Page = (
                        <div>
                            <ImageSlider />
                        </div>
                    )
                    break
            case 4 :
                        setbgid(4)
                            var Page = (
                                <div>
                                    <SliderApp />
                                </div>
                            )
                            break
            case 5 :
                 setbgid(4)
                var Page = (
                    <div>
                        <ImersiveRoom />
                    </div>
                )
                break
            case 6 :
                setbgid(4)
                var Page = (
                    <div>
                        <Mergulharte />
                    </div>
                )
                break
            case 7 :
                    setbgid(2)
                    var Page = (
                        <div>
                            <AboutMe />
                        </div>
                    )
                    break
            case 8 :
                    setbgid(4)
                    var Page = (
                        <div>
                            <Bot />
                        </div>
                    )
                    break
            case 9 :
                        setbgid(4)
                        var Page = (
                            <div>
                                <AccountInfo />
                            </div>
                        )
                        break
            default :
            setbgid(6)
                var Page = (
                    <>
                    <p>Ola</p>
                    </>
                )
                break
        }
        return(
            <>
                <TopMenu />
                <div>
                    <ContentBoxStyle className={'bgimage bg'+bgid}>
                        <div className='container pensamento'>
                            <div id='Container'>
                               {Page}
                            </div>
                        </div>
                    </ContentBoxStyle>
                </div>
                <Menu />
            </>
            )
    }
    else{
        switch(UserPage){
            case 1 :
                var Page =(
                    <>
                    <LoguinUi />
                    </>
                )
                break
        case 2 :
            var Page =(
                <>
                <RegistrerUi />
                </>
            )
            break
        }
        return(
            <>
                <div>
                    <ContentBoxStyle className={'bgimage bg'+bgid}>
                        <div className='container pensamento'>
                            <div id='Container'>
                               {Page}
                            </div>
                        </div>
                    </ContentBoxStyle>
                </div>
            </>
            )
    }
    
}