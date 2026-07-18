import { NavLink } from "react-router-dom";

const NavLinks = () => {

    const links = [
        {
            name:"Home",
            path:"/"
        },
        {
            name:"Destinations",
            path:"/destinations"
        },
        {
            name:"Packages",
            path:"/packages"
        },
        {
            name:"About",
            path:"/about"
        },
        {
            name:"Contact",
            path:"/contact"
        }
    ]

    return (
        <>
            {
                links.map(link=>(
                    <NavLink
                        key={link.path}
                        to={link.path}
                        className={({isActive})=>
                            `font-medium transition ${
                                isActive
                                ? "text-sky-600"
                                : "text-gray-700 hover:text-sky-600"
                            }`
                        }
                    >
                        {link.name}
                    </NavLink>
                ))
            }
        </>
    );
};

export default NavLinks;