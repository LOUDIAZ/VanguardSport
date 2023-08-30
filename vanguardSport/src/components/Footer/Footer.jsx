import './Footer.css';
import iconinstagram from "./Footer/instagram.png";
import iconmail from "./Footer/mail.png";
import icongithuv from "./Footer/github.png";
import iconlinkedin from "./Footer/linkedin.png";
import logo from "./Footer/logofooter.png";

function Footer() {
    return (
        <footer className="footer">
            <div >
                <img
                    src={logo}
                    alt="Logo de Vanguard Sport"
                    className="logo"
                />
            </div>
            <div className="footer_contact">
                <h3>Diseñado por Lourdes Díaz</h3>
                <ul className='contact_icons'>
                    <li><a href='' target='_blank' ><img src={iconlinkedin} alt='icon-linkedin'height={40}/></a></li>
                    <li><a href='' target='_blank' ><img src={icongithuv} alt='icon-github'height={40}/></a></li>
                    <li><a href='' target='_blank' ><img src={iconmail} alt='icon-mail'height={40}/></a></li>
                    <li><a href='' target='_blank' ><img src={iconinstagram} alt='icon-instagram'height={40}/></a></li>
                </ul>
            </div>
            <div className="footer_data">
                <ul>
                    <li>VARGUARD SPORT</li>
                    <li>Quienes Somos</li>
                    <li>Términos y Condiciones</li>
                    <li>Política y Privacidad</li>
                </ul>
            </div>
            <div className="footer_data">
                <ul>
                    <li>NECESITAS AYUDA?</li>
                    <li>Preguntas Frecuentes</li>
                    <li>Formas de Envío</li>
                    <li>Cambios</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;