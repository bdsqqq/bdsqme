import React from 'react';

import { AuthProvider } from './Auth'
import Routes from './routes'

const App = () => <AuthProvider><Routes /></AuthProvider>;

export default App;
