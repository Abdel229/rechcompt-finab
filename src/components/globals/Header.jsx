import '../../sass/Header.scss'
import logo from '../../assets/logo.svg'
const Header=()=>{
    return (
        <div className="header">
            <div>
                <img src={logo} alt="logo" />
            </div>
        </div>
    )
}
export default Header