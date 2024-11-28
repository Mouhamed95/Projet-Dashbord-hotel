import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";



export function useLogout() {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const { mutate: logout, isLoading } = useMutation({
        mutationFn: logoutApi,
        onSuccess: () => {
            //supprimer tous les requetes accumulés dans le cache de reactquery
            queryClient.removeQueries()

            navigate("/login",{replace:true})
        }
    })
    return {logout, isLoading}
}