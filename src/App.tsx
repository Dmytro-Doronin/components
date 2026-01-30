import './App.css'
import {Home} from "./pages/Home/Home.tsx";
import {Header} from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
// import {SignUpPage} from "./pages/signUpPage/SignUpPage.tsx";

function App() {
    return (
        <>
            <Header/>
            <Home/>
            {/*<main className="pt-[var(--header-height)]">*/}
            {/*    <SignUpPage/>*/}
            {/*</main>*/}
            <Footer/>
        </>
    )
}

export default App
