// src/routes/RootPage.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function RootPage() {
   const [utilisateurs, setUtilisateurs] = useState([])

   const fetchUtilisateurs = async () => {
        const res = await fetch("http://localhost:3000/utilisateurs", {
             method: "GET"
        })
        const json = await res.json()
        setUtilisateurs(json)
   }

   useEffect(() => {
        fetchUtilisateurs()
   }, [])
   return (
      <>
         <div id="sidebar">
            <h1>Gestion des utilisateurs</h1>
            <div>
               <form id="search-form" role="search">
                  <input
                     id="q"
                     aria-label="Search contacts"
                     placeholder="Search"
                     type="search"
                     name="q"
                  />
                  <div
                     id="search-spinner"
                     aria-hidden
                     hidden={true}
                  />
                  <div
                     className="sr-only"
                     aria-live="polite"
                  ></div>
               </form>
               <Link to="/new_user">Nouveau</Link>
            </div>
            <nav>
               <ul>
                  {utilisateurs.map((utilisateur, index) => {
                     return (
                        <li key={index}>
                           <Link to={`/utilisateurs/${utilisateur.ID_UTILISATEUR}`}>{ utilisateur.NOM } { utilisateur.PRENOM }</Link>
                        </li>
                     )
                  })}
               </ul>
            </nav>
         </div>
         <div id="detail"></div>
      </>
   )
}