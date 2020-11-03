import logo from './../logo.svg'

const Navbar = ()=>{
    return(
        <div className="row p-2 mb-2 bg-primary">
            <img id='logo' src={logo}/>
        </div>
    )
}

export default Navbar;

