import React from "react";

function Header() {
    return(
        <>
            <div style={{display: "flex", backgroundColor: "purple", padding: '20px', color: "white", justifyContent: "space-between"}}>
                <div className="logo" style={{color: "white", fontWeight: "bold", fontSize: '20px'}}>Logo</div>
                <div>Logout</div>
            </div>
        </>
    )
}

export default Header;