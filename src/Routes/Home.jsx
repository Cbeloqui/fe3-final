import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'

const Home = () => {
const {state} = useContextGlobal();
return (
  <main className="" >
    <h1>Home</h1>
    <div className='card-grid'>
      {state.data.map(item => <Card key={item.id} item={item}/>)}
    </div>
  </main>
  )
}

export default Home