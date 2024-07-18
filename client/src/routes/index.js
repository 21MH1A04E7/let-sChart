import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx'
import Message from '../components/Message.jsx'
const router=createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
          {
            path: 'some-path',
            element: <Message/>,
          },
        ],
      },
])

export default router;
