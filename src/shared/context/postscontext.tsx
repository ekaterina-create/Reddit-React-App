import React,{createContext} from 'react';
import { usePostsData } from '../../hooks/usePostsData';


export interface IPostsContextData {
   list?: Array<any>;
}

export const postsContext = createContext<IPostsContextData>({});

export function PostsContextProvider({children} : {children:React.ReactNode}) {
   const [data] = usePostsData()
      return(
      <postsContext.Provider value={data}>
         {children}
      </postsContext.Provider>
   )
}