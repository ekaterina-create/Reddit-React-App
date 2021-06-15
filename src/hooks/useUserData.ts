import { IUserData, meRequestAsync } from './../shared/redux/actionsCreators/meRequest';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../shared/redux/store';

export function useUserData() {
   const data = useSelector<RootState, IUserData>(state => state.me.data)
   const loading = useSelector<RootState, boolean>(state => state.me.loading)

   const token = useSelector<RootState>(state => state.token);
   const dispatch = useDispatch();


   useEffect(() => {
     if(!token || token === 'undefined') return;
      dispatch(meRequestAsync());
   }, [token])

   return { data, 
           loading,
         }
}

