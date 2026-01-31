import './App.css'
import {Header} from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import {TeachersPage} from "./pages/teachersPage/TeachersPage.tsx";
// import {SignUpPage} from "./pages/signUpPage/SignUpPage.tsx";

function App() {
    return (
        <>
            <Header/>
            <main className="pt-[var(--header-height)] pb-[200px]">
                <TeachersPage/>
            </main>
            {/*<Home/>*/}
            {/*<main className="pt-[var(--header-height)]">*/}
            {/*    <SignUpPage/>*/}
            {/*</main>*/}
            <Footer/>
        </>
    )
}

export default App
