
//NOT EDITABLE!!!
import Topography from "../../components/Topography"
import Hero from "../../components/Hero"
import Footer from "../../components/Footer"

// EDITABLE
import background from "../../assets/img/background.jpg" //Background
import logo from '../../assets/img/logo.png'; //Logo


function pageLayout(props) {
    //EDITABLE
    const deskripsi = "Selamat datang kembali di"
    const title1 = "Muhammadiyah DIY"
    const title2 = "Blended Learning"
    const slogan = "Siapa yang menempuh jalan untuk mencari ilmu, maka Allah akan mudahkan baginya jalan menuju surga."
    const copyright = "2021 Muhammadiyah DIY Blended Learning - Didukung oleh Geschool"

    return (
        <div>
            <Topography />
            <Hero
                logo={logo}
                background={background}
                deskripsi={deskripsi}
                title1={title1}
                title2={title2}
                slogan={slogan}
                appName={props.appName}
            >
                {props.children}
            </Hero>
            <Footer
                copyright={copyright}
            />
        </div>
    );
}


export default pageLayout;