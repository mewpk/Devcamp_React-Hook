import React, { createContext } from 'react'

let Auth = createContext(null)


export default function AuthProvider() {

    if(token){
        return (
            <div>Auth</div>
          )
    }
  else{
      return
  }
}
