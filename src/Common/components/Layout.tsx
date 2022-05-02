import React from "react";
import NavBar from "./NavBar";
import CustomThemeProvider from "../contexts/CustomThemeProvider";

const Layout = ({ children }: any) => {

    return <CustomThemeProvider>
        <div>
            <NavBar />
            {children}
        </div>
    </CustomThemeProvider>
}

export default Layout;