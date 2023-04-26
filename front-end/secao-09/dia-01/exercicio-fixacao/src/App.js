import React, { useState } from 'react'
import Form from './components/Form';

function App() {
  const [infos, setInfos] = useState({
    name: '',
    age: 0,
    city: '',
    progress: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target

    setInfos((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div>
      <Form handleChange={handleChange} progress={infos.progress} />
    </div>
  )
}

export default App
