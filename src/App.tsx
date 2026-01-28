import './App.css'

import {Home} from "./pages/Home/Home.tsx";

function App() {
  return <Home />
  //   type SortDirection = (typeof selectOptions)[number]['value'];
  //
  //   const selectOptions = [
  //       { label: 'A-Z', value: 'asc' },
  //       { label: 'Z-A', value: 'desc' },
  //   ] as const;
  //   const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  //
  //   const onSelectChange = (option: SortDirection) => {
  //       setSortDirection(option);
  //   };
  // return (
  //     <div className=' flex items-center justify-center'>
  //         <Button>Primary</Button>
  //         <Button variant="secondary">Secondary</Button>
  //         <Button variant="info">info</Button>
  //         <Button variant="tertiary">tertiary</Button>
  //         <Button variant="success" fullWidth>
  //             Success full width
  //         </Button>
  //         {/*<TextField errorMessage='error' label='Name' placeholder='Password' variant='primary'/>*/}
  //         <TextField type='password' label='Name' placeholder='Password' variant='primary'/>
  //         {/*<TextField errorMessage='error' label='Name' placeholder='Name' variant='secondary'/>*/}
  //         <TextField type='password' label='Name' placeholder='Name' variant='secondary'/>
  //         <SelectComponent
  //             onChange={onSelectChange}
  //             defaultValue={sortDirection}
  //             options={selectOptions}
  //         />
  //     </div>
  // )
}

export default App
