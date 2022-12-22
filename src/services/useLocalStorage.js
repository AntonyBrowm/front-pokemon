import { useState } from "react";
export function useLocalStorage (key, initialValue){
        try{
            const item =window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }catch{
            return;
        }
    }