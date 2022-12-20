import React, { Children, createContext, useState } from 'react'

export const loginContext  = createContext("")
function ContextApi({Children}) {

    const [loginData , setLoginData] = useState()
  return (
    <>
<loginContext.Provider value={{loginData,setLoginData}}>
  {Children}
</loginContext.Provider>
    </>
  )
}

export default ContextApi