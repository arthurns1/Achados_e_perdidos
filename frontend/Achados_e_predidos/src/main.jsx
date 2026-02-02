//React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Routes
import { Home } from "./routes/Home.jsx";
import { Login } from "./routes/Login.jsx";
import { CadastroItem } from "./routes/CadastroItem.jsx";
import { CadastrarAdmin } from "./routes/CadastrarAdmin.jsx";

// Contexts
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { RegistrarDevolucao } from "./routes/RegistrarDevolucao.jsx";
import { Devolucoes } from "./routes/Devolucoes.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "cadastrar-admin",
                element: <CadastrarAdmin />,
            },
            { path: "cadastro-item", element: <CadastroItem /> },
            {
                path: "/registro-devolucao/:id",
                element: <RegistrarDevolucao />,
            },
            { path: "/devolucoes", element: <Devolucoes /> },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </StrictMode>,
);
