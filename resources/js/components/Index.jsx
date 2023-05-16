import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./Login";
import Home from "./Home";
import Navb from "./Navbar";
import Buscar from "./Btienda";
import RegistrarT from "./Rtienda";
import BorrarT from "./Dtienda";
import Vproducto from "./Vproducto";
import Vemployee from "./Vemployee";
import RegisProd from "./Rproducto";
import RegisEmployee from "./Remployee";
import BorrarPro from "./Dproductos";
import BorrarEmplo from "./Demployee";
import BorrarPv from "./Dprovedor";
import RegistrarP from "./Rprovedores";
import Bprov from "./Bprovedor";
import DeleteUser from "./DeleteUser";
import ChangePassword from "./ChangePassword";
import Register from "./Ruser";
import{ BrowserRouter as Router, Routes, Route} from "react-router-dom";


function Index(){
    return(
        <Router>
            <main>
            <Navb />
                < Routes>                
                    <Route path="/proautosxpress/public/"  element={<Home />}/>
                    <Route path="/proautosxpress/public/login" element={<LoginForm />}/>
                    <Route path="/proautosxpress/public/Btienda"  element={<Buscar />}/>
                    <Route path="/proautosxpress/public/Rtienda"  element={<RegistrarT />}/>
                    <Route path="/proautosxpress/public/Dtienda"  element={<BorrarT />}/>
                    <Route path="/proautosxpress/public/Vprod"  element={<Vproducto />}/>
                    <Route path="/proautosxpress/public/RProd"  element={<RegisProd />}/>
                    <Route path="/proautosxpress/public/DProd"  element={<BorrarPro />}/>
                    <Route path="/proautosxpress/public/Dprov"  element={<BorrarPv/>}/>
                    <Route path="/proautosxpress/public/Rprov"  element={<RegistrarP />}/>
                    <Route path="/proautosxpress/public/Bprov"  element={<Bprov />}/>
                    <Route path="/proautosxpress/public/DeleteUser"  element={<DeleteUser />}/>
                    <Route path="/proautosxpress/public/ChangePassword"  element={<ChangePassword />}/>
                    <Route path="/proautosxpress/public/Register"  element={<Register />}/>
                    <Route path="/proautosxpress/public/REmplo"  element={<RegisEmployee />}/>
                    <Route path="/proautosxpress/public/BEmplo"  element={<Vemployee />}/>
                    <Route path="/proautosxpress/public/DEmplo"  element={<BorrarEmplo />}/>
                    
                    
                </ Routes>
            </main>
        </Router>
    )
}
export default Index;

if (document.getElementById("example")) {
    ReactDOM.render(<Index />, document.getElementById("example"));
}
