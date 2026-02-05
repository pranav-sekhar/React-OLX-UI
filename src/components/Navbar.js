function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">OlX</div>
            <ul className="menu">
                <li>Home</li>
                <li>Cars</li>
                <li>Motorcycles</li>
                <li>Mobile Phones</li>
                <li>Scooters</li>
                <li>Others</li>
            </ul>
            <input type="text" placeholder="Search here" className="search"/>
            <div className="profile">My Profile</div>            
        </nav>
    )
}
export default Navbar;
