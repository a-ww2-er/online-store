"use client"
import { useAppSelector } from "@/redux/hooks"


export default function useAuth(){
const user = useAppSelector((state)=> state.persistedReducer.auth.user)

if(user && !user.profilePhoto){
        return {user:true, photo:false}
    }
    if(user && user.profilePhoto){
        return {user:true, photo:true}
    }
    else{
        return {user:false,photo:false}
    }
}