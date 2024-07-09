import Footer from "../contexts/Footer";
import Header from "./Header";
import Home from "./Home";


export default function PaginaPrincipal() {
    return (
        <div>
            <Header />
            <div>
                <Home />
            </div>
            <Footer />
        </div>
    );
}