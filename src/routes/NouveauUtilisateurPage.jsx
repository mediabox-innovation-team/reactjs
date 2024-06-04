   // src/routes/NouveauUtilisateurPage.jsx
import { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm';
import { useFormErrorsHandle } from '../hooks/useFormErrorsHandle';

function MyForm() {
   const [data, handleChange, setData, setValue] = useForm({
      nom: "",
      prenom: "",
      email: ""
   })
   const { hasError, getError, checkFieldData, isValidate } = useFormErrorsHandle(data, {
      nom: {
         required: true,
         length: [1, 30]
      },
      prenom: {
         required: true,
         length: [1, 30]
      },
      email: {
         email: true,
         length: [1, 30]
      }
   }, {
      nom: {
         required: "Ce champ est obligatoire",
         length: "Nom invalide (1 - 30 caracteres)"
      },
      prenom: {
         required: "Ce champ est obligatoire",
         length: "Prenom invalide (1 - 30 caracteres)"
      },
      email: {
         required: "Ce champ est obligatoire",
         length: "Email invalide (1 - 30 caracteres)"
      }
   })

   const [utilisateurs, setUtilisateurs] = useState([])

   const handleSubmit = async (e) => {
      try {
         e.preventDefault()
         if (isValidate()) {
            const form = new FormData()
            form.append("NOM", data.nom)
            form.append("PRENOM", data.prenom)
            form.append("EMAIL", data.email)
            const res = await fetch("http://localhost:3000/utilisateurs", {
               method: "POST",
               body: form
            })
            const json = await res.json()
            fetchUtilisateurs()
            alert("L'utilisateur a ete cree avec success")
         } else {
            alert("Le formulaire presenes des erreurs. veuillez les corriger")
         }
      } catch (error) {
         console.log(error)
         alert("L'utilisateur n'a pas ete cree, reeassayer plus tard")
      }
   }

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
      <form onSubmit={handleSubmit}>
         <h1>Nouveau utilisateur</h1>
         <div>
            <input
               placeholder='Nom'
               name='nom'
               value={data.nom}
               onChange={handleChange}
               onBlur={checkFieldData}
            />
            {hasError("nom") ? <div style={{ color: "red" }}>{getError("nom")}</div> : null}
         </div>
         <div>
            <input
               placeholder='Prenom'
               name='prenom'
               value={data.prenom}
               onChange={handleChange}
               onBlur={checkFieldData}
            />
            {hasError("prenom") ? <div style={{ color: "red" }}>{getError("prenom")}</div> : null}
         </div>
         <div>
            <input
               placeholder='Email'
               name='email'
               value={data.email}
               onChange={handleChange}
               onBlur={checkFieldData}
            />
            {hasError("email") ? <div style={{ color: "red" }}>{getError("email")}</div> : null}
         </div>
         <button>Envoyer</button>

         <h1>Liste des utilisateurs</h1>
         <ul>
            {utilisateurs.map((utilisateur, index) => {
               return (
                  <li key={index}>{utilisateur.NOM} {utilisateur.PRENOM}</li>
               )
            })}
         </ul>
      </form>
   )
}
const NouveauUtilisateurPage = () => {

   return (
      <>
         <MyForm />
      </>
   );
};

export default NouveauUtilisateurPage