const Navbar = () => {

    const handleClick = () =>{
        console.log('top');
    }

    return (  
        <nav className="navbar">

            <button class = 'brand' onClick={handleClick()}>Brandon Lurie</button>
            <div className="links">
                <a href="/">Home</a>
                <a href="Blog">The Blognpm </a>
                <a href="/About">About Me</a>
                <a href="Contact">Contact Me</a>
                
            </div>
        </nav>
    );
}
 
export default Navbar;