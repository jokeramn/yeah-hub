import { createRoot } from 'react-dom/client';
import App from './App'
import { ReactNode } from "react";

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App/> as ReactNode);
