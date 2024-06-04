import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function DetailUtilisateurPage() {
   const [utilisateur, setUtilisateur] = useState(null)
   const params = useParams()
   const id = params.id

   const fetchUtilisateur = async () => {
      const res = await fetch(`http://localhost:3000/utilisateurs/${id}`, {
         method: "GET"
      })
      const json = await res.json()
      setUtilisateur(json)
   }

   useEffect(() => {
      fetchUtilisateur()
   }, [])
   return (
      utilisateur ? <div id="contact">
         <div>
            <img
               key={utilisateur.IMAGE}
               src={
                  utilisateur.IMAGE ||
                  `https://robohash.org/${id}.png?size=200x200`
               }
            />
         </div>

         <div>
            <h1>
                     {utilisateur.NOM} {utilisateur.PRENOM}
            </h1>

            <div>
                  <button type="submit">Edit</button>
                  <button type="submit">Delete</button>
            </div>
         </div>
      </div>
         : <div>Chargement...</div>
   )
}