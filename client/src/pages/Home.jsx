import React from 'react'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <>
    <div>
        Home
    </div>
    <section>
        <Outlet/>
    </section>
    </>
  )
}

export default Home