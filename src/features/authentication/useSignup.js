import { useMutation } from "@tanstack/react-query";
import { signup as } from "../../services/apiAuth";


export function useSignup() {
   const {mutate, isLoading} = useMutation({
        mutationFn:signup
    })
}