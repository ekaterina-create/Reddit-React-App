import { saveToken } from './../shared/redux/actionsCreators/meRequest';
import { useDispatch } from 'react-redux';
import {useEffect} from 'react';

export function useToken() {
   const dispatch = useDispatch();
 
   useEffect( () => {
      if(window.__token__ &&  window.__token__ !== "undefined") {
         dispatch(saveToken());
      }
   }, [])
   
  
}

