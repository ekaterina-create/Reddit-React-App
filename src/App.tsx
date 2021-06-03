import React,{ useState } from 'react';
import { hot } from "react-hot-loader/root";
import { Layout } from './shared/Layout/Layout';
import './main.global.less'
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';
import { useToken } from './hooks/useToken';
import { tokenContext } from './shared/context/tokenContext';
import { UserContextProvider } from './shared/context/usercontext';
import { PostsContextProvider } from './shared/context/postscontext';
import { Navigation } from './shared/Navigation';
import { commentContext } from './shared/context/commentContext';



function AppComponent() {
   const [token] = useToken();
   const [commentValue, setcommentValue] = useState('');
   const CommentProvider = commentContext.Provider;

   return (
      <CommentProvider value={{
         value:commentValue,
         onChange:setcommentValue,
      }}>
      <tokenContext.Provider value={token}>
         <UserContextProvider>
            <PostsContextProvider>
               <Layout >
                 <Header />
                 <Navigation/>
                  <Content>
                   <CardsList />
                  </Content>
               </Layout >
            </PostsContextProvider>
         </UserContextProvider>
      </tokenContext.Provider>
      </CommentProvider>

   );
}

export const App = hot(() => <AppComponent />);