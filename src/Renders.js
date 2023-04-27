import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import Landingpage from "./Pages/Landing-page";
import Login from "./Pages/login";
import Pageone from "./Pages/page-one";


const Renders = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={< Pageone />}/>
                <Route path="/login" element={< Login /> }/>
                <Route path="/landingpage" element={< Landingpage />}/>
            </Routes>
        </Router>
        // ini dibuat untuk router nya 
    )
}

export default Renders;