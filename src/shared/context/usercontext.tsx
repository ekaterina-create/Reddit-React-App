
import React,{createContext} from 'react';
import { useUserData } from '../../hooks/useUserData';

export interface IUserContextData {
   name?: string;
   iconImg?: string;
   loading?: boolean;
   data?:any;
}

export const userContext = createContext<IUserContextData>({});

export function UserContextProvider({children} : {children:React.ReactNode}) {
   const {data, loading} = useUserData()
   return(
      <userContext.Provider value={{data, loading}}>
         {children}
      </userContext.Provider>
   )
}