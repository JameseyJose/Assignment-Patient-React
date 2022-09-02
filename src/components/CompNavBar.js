import React from 'react';
import { NavLink,Link } from 'react-router-dom'


const CompNavBar = () =>
{


    return(
        <div>

        <NavLink activeClassName="active" 
        to={"/Patient-Search"} 
        style={{margin:"15px"}}> SEARCHING PATIENTS </NavLink>
        
        </div>
    )
}

export default CompNavBar;