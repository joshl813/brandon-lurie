const Navbar = () => {

    const handleClick = () =>{
        console.log('top');
    }

    return (  
       <div className="container">
            <nav className="navbar">
                <div className="brand">
                     <a href = 'brand' onClick={handleClick()}>Brandon Lurie</a>
                </div>
                <div className="links">
                    <a href="/">Home</a>
                    <a href="Blog">The Blog </a>
                    <a href="/About">About Me</a>
                    <a href="Contact">Contact Me</a>
                    
                </div>
            </nav>
        </div>
    );
}
 
export default Navbar;