import './App.css'

import {Header} from "./components/header/Header.tsx";
import {LoginPage} from "./pages/loginPage/LoginPage.tsx";

function App() {
  // return <Home />
    return (
        <>
            <Header/>
            <main className="pt-[var(--header-height)]">
                <LoginPage/>
            </main>
        </>

    )
}

export default App
