import ReactDOM from 'react-dom/client'
import App from './App';
import { HelmetProvider } from "react-helmet-async";

const Approot = ReactDOM.createRoot(document.getElementById("root"))

Approot.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
