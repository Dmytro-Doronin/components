import './App.css'
import {Home} from "./pages/Home/Home.tsx";
import {Header} from "./components/header/Header.tsx";
import Footer from "../src/components/footer/Footer.tsx";
// import {SignUpPage} from "./pages/signUpPage/SignUpPage.tsx";

function App() {
    return (
        <>
            <Home/>
            <Header/>
            <Footer/>
            {/*<main className="pt-[var(--header-height)]">*/}
            {/*    <SignUpPage/>*/}
            {/*</main>*/}
        </>
    )
}

export default App
