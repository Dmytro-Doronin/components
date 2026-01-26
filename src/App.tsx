import './App.css'
import {Button} from "./components/ui/button/Button.tsx";
import {TextField} from "./components/ui/textField/TextField.tsx";

function App() {

  return (
    <>
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="info">info</Button>
        <Button variant="tertiary">tertiary</Button>
        <Button variant="success" fullWidth>
            Success full width
        </Button>
        <TextField errorMessage='error' label='Name' placeholder='Password' variant='primary'/>
        <TextField label='Name' placeholder='Password' variant='primary'/>
        <TextField errorMessage='error' label='Name' placeholder='Name' variant='secondary'/>
        <TextField label='Name' placeholder='Name' variant='secondary'/>
    </>
  )
}

export default App
