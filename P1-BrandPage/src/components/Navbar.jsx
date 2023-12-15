import { HamMenu } from "./Hamburger"
export const Navbar = () => {
    return(
        <>
        <nav className="nav container">
        <div className="logo">
            <img src="/images/brand_logo.png" alt="logo" />
        </div>

        <ul className="navList">
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
        </ul>
        <div className="button-container">
        <button className="login-btn">Login</button>
        </div>
        </nav>
        <HamMenu/>
        </>
    )
}