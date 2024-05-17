import React from 'react'
import Card from "./componet/card"
import Addcard from './componet/Addcard'
import AddToCardData from './componet/AddToCardData'
import Nav from './componet/nav'
import { useState } from 'react'
import Form from './componet/Form'
function App() {
  const [condition, setCondition] = useState(true);
  const [datalogin,setDatalogin]=useState(false);
  return (
    <div className='app-main'>
    {datalogin? (
      <Card>
      <Nav setCondition={setCondition} />
      {condition ? <Addcard/> : <AddToCardData />}
    </Card>
    
    ) : (
      <Form setDatalogin={setDatalogin} />
    )}
  </div>
);
}

export default App