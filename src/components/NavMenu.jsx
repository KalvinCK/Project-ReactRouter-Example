
import React, { Component } from "react";

export class NavMenu extends Component
{
    render()
    {
        return (
            <header>
                <ul>
                    <li> <a href="/">Home</a> </li>
                    <li> <a href="/about">About</a> </li>
                </ul>
            </header>
        )
    }
}
// export class NavMenu extends Component
// {
//     render()
//     {
//         return (
//             <header>
//                 <Navbar>
//                     <ul>
//                     <NavItem>
//                         <NavLink tag={Link} to="/">Home</NavLink>
//                     </NavItem>
//                     <NavItem>
//                         <NavLink tag={Link} to="/about">About</NavLink>
//                     </NavItem>
//                     </ul>
//                 </Navbar>
//             </header>
//         )
//     }
// }

//-----------------------------------------------------------------------------
// caso queira utlizar o boots trap use a parte baixo e apage tudo acima, e em ./index descomente
// a importação da lib do bootstrap 

// import React, { Component } from "react";
// import { Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
// import { Link } from "react-router-dom";

// export class NavMenu extends Component
// {
//     render()
//     {
//         return (
//             <header>
//                 <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
//                 <NavbarBrand tag={Link} to="/">AspnetReactApp</NavbarBrand>
//                 <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
//                     <ul className="navbar-nav flex-grow">
//                     <NavItem>
//                         <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
//                     </NavItem>
//                     <NavItem>
//                         <NavLink tag={Link} className="text-dark" to="/about">About</NavLink>
//                     </NavItem>
                    
//                     </ul>
//                 </Navbar>
//             </header>
//         )
//     }
// }
