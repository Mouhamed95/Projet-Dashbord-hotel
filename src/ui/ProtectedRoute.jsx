import styled from "styled-components"
import { useUser } from "../features/authentication/useUser"
import Spinner from "./Spinner"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"



const FullPage = styled.div`
height: 100vh;
background-color: var(--color-grey-50);
display:flex;
align-items:center;
justify-content:center;

`

function ProtectedRoute({ children }) {
const navigate = useNavigate()

    //1 charger l'utilisateur authentifié
    const {isLoading, isAuthenticated} = useUser()


    //2 s'il y'a pas un utilisateur authentifié, rediriger vers la page de connexion
    useEffect(function () {
        if(!isAuthenticated && !isLoading) navigate("/login")
    }, [isLoading, isAuthenticated, navigate])
    
    //3 pendant le chargement, afficher un spinner
    if (isLoading)
        return (
        <FullPage>
         <Spinner/>
        </FullPage>
    )
    
    //4 s'il y'a un utilisateur l'application est rendu

    if(isAuthenticated)
    return (
        children
    )
}

export default ProtectedRoute
