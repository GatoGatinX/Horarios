'use client'
import { UserContextProvider } from "../../../../public/context/UserContext"

function page({ params }) {
  return (
    
    <UserContextProvider>
      <div>Editando {params.id * 8}
        <p><text>Pagina {params.id * 5} en construcción</text></p>
        <div>
          <p>Cuando la pagina sea concluida se verá reflejado aquí</p>
        </div>
      </div>
    </UserContextProvider>
  )
}
export default page
