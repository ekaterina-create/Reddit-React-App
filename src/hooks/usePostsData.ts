import { RootState } from './../shared/redux/store';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface IPostData {
   list?: Array<any>;

}

export function usePostsData() {
   const [data, setData] = useState<IPostData>({});
   const token = useSelector<RootState>(state => state.token)
   
   useEffect(() => {
      token &&
      axios.get('https://oauth.reddit.com/best', {
         headers: { Authorization: `bearer ${token}` }
      })
         .then((resp) => {
            const postsData = resp.data;

            setData({ list: postsData.data.children })
         })
         .catch(console.log)
   }, [token])

   return [data]
}