import React from 'react';
import { hot } from "react-hot-loader/root";
import { Layout } from './shared/Layout/Layout';
import './main.global.less'
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';
import { UserContextProvider } from './shared/context/usercontext';
import { PostsContextProvider } from './shared/context/postscontext';
import { Navigation } from './shared/Navigation';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './shared/redux/store';
import thunk from 'redux-thunk';



const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk),));



function AppComponent() {

   return (
      <Provider store={store}>
         <UserContextProvider >
            <PostsContextProvider>
               <Layout >
                  <Header />
                  <Navigation />
                  <Content>
                     <CardsList />
                    
                  </Content>
               </Layout >
            </PostsContextProvider>
         </UserContextProvider>
      </Provider>

   );
}

export const App = hot(() => <AppComponent />);