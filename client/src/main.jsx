import { createBrowserRouter } from "react-router-dom";
import App from './App.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import CheckEmailPage from "./pages/CheckEmailPage.jsx";
import CheckPasswordPage from "./pages/CheckPasswordPage.jsx";
import Home from "./pages/Home.jsx";
import MessagePage from "./components/MessagePage.jsx";
import AuthLayouts from "./Layout/index.jsx";
import Forgotpassword from "./pages/Forgotpassword.jsx";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './redux/store';

const router = createBrowserRouter([
{
    path : "/",
    element : <App/>,
    children : [
        {
            path : "register",
            element : <AuthLayouts><RegisterPage/></AuthLayouts>
        },
        {
            path : 'email',
            element : <AuthLayouts><CheckEmailPage/></AuthLayouts>
        },
        {
            path : 'password',
            element : <AuthLayouts><CheckPasswordPage/></AuthLayouts>
        },
        {
            path : 'forgot-password',
            element : <AuthLayouts><Forgotpassword/></AuthLayouts>
        },
        {
            path : "",
            element : <Home/>,
            children : [
                {
                    path : ':userId',
                    element : <MessagePage/>
                }
            ]
        }
    ]
}
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
// reportWebVitals()