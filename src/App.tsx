import {
    QueryClient,
    QueryClientProvider
} from '@tanstack/react-query';
import React from 'react';
import { Posts } from './features/Post/Posts';

const queryClient = new QueryClient()


function App() {
    return (
        <div className="App">
            <QueryClientProvider client={queryClient}>
             <header className="App-header">See it</header> 
            <Posts />
           </QueryClientProvider>
        </div>
    );
}

export default App;
