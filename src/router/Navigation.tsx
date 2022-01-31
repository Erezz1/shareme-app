import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';

import Home from '../container/Home';
import { Login } from '../components';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="/*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Navigation;
