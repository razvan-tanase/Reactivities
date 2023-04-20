import ReactDOM from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css'
import './app/layout/style.css';
import reportWebVitals from './reportWebVitals';
import { StoreContext, store } from './app/stores/store';
import { router } from './app/router/Routes';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StoreContext.Provider value={store}>
    <RouterProvider router={router} />
  </StoreContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
