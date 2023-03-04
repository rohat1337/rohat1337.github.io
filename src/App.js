import './App.css';
import { useDisclosure } from "@chakra-ui/react"
import Terminal from './components/Terminal';
import { useState, useEffect } from 'react';
import Site from './screens/Site';

function App() {

  const [site, setSite] = useState(0)
  const { isOpen, onToggle } = useDisclosure()

  useEffect(() => {
    if (site !== 0) {
      onToggle()
    }
  }, [site])


  return (
    <div className='App'>
      <Terminal setSite={setSite} />
      <Site isOpen={isOpen} setSite={setSite} onToggle={onToggle} site={site} />
    </div>
  )

}

export default App;
