import React from "react";

function Nav() {
    return(
        <>
            <header style={{backgroundColor: "white", width: '100%', padding: '15px 20px'}}>
                <nav style={{display: 'flex', flexDirection: "row", justifyContent: 'space-between'}}>
                    <div className="logo" style={{color: "white",fontWeight: "bold", fontSize: '20px'}}>Logo</div>
                    <ul style={{display: 'flex', gap: '40px', listStyle: 'none'}}>
                        <li><a style={{textDecoration: 'none', listStyle: 'none', color: 'purple', fontWeight: "bold"}}>Home</a></li>
                        <li><a style={{textDecoration: 'none', listStyle: 'none', color: 'purple', fontWeight: "bold"}}>About</a></li>
                        <li><a style={{textDecoration: 'none', listStyle: 'none', color: 'purple', fontWeight: "bold"}}>Contact</a></li>
                        <li><a style={{textDecoration: 'none', listStyle: 'none', color: 'purple', fontWeight: "bold"}}>Contact</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Nav;