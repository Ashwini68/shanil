import React from 'react'
import Usersidebar from '../Usersidebar'
import Uheader from '../Uheader'
import { Box } from '@mui/material'

const Userlayout = ({children}) => {
  return (
    <>
    <Uheader/>
    <Usersidebar />

  
    <div>
      {children}
    </div>


    </>
  )
}

export default Userlayout
