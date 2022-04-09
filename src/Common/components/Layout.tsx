import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children }: any) => {

    return <React.Fragment>
        <NavBar />
        {children}
    </React.Fragment>
}

export default Layout;