import { Route, Routes } from 'react-router-dom';

import DefaultLayout from './DefaultLayout';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}            >
                <Route
                    path='/:category/search/:keyword'
                    element={<Catalog />} />
                <Route
                    path='/:category/:id'
                    element={<Detail />}
                />
                <Route
                    path='/:category'
                    element={<Catalog />}
                />
                <Route
                    path='/'
                    exact
                    element={<Home />}
                />
            </Route>
        </Routes>
    )
}

export default Router;