import { create } from "zustand";

const useAuthStore = create((set)=>({
    token: localStorage.getItem('token')||null,
    email_verified_at: JSON.parse(localStorage.getItem('email_verified_at'))||false,

    setAuth:(token,email_verified_at)=>{
        localStorage.setItem('token',token);
        localStorage.setItem('email_verified_at',email_verified_at);
        set( {
            token,
            email_verified_at
        })
    },
    clearAuth:()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('email_verified_at');
        set({
            token: null, email_verified: false
        });
    },
}));
export default useAuthStore;