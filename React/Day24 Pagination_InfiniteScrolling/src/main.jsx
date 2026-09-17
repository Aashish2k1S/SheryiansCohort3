// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(<App />);

import { createRoot } from "react-dom/client";
import "./index.css";
import TanStack from "./TanStack.jsx";

import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
    <QueryClientProvider client={queryClient}>
        <TanStack />
    </QueryClientProvider>
);
