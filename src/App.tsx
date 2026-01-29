import './App.css'

import {Header} from "./components/header/Header.tsx";
import {SignUpPage} from "./pages/signUpPage/SignUpPage.tsx";

function App() {
  // return <Home />
    return (
        <>
            <Header/>
            <main className="pt-[var(--header-height)]">
                <SignUpPage/>
            </main>
        </>

    )
}

export default App
