import { tokenContext } from './../shared/context/tokenContext';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';

interface IPostData {
   list?: Array<any>;
   
}

export function usePostsData() {
   const [data, setData] = useState<IPostData>({});
   const token = useContext(tokenContext)
   
   useEffect(() => {
      if(!token || token === 'undefined') return;
      axios.get('https://oauth.reddit.com/best', {
         headers: { Authorization: `bearer ${token}` }
      })
         .then((resp) => {
            const postsData = resp.data;
           
            setData({ list: postsData.data.children})
         })
         .catch(console.log)
   }, [token])

   return [data]
}