import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminLayout from './layout/admin';
import WebsiteLayout from './layout/website';
import AdminProductPage from './pages/admin/product';
import AdminProductAddPage from './pages/admin/product/add';
import AdminProductEditPage from './pages/admin/product/edit';

export const Routers = (props) => {
    return (
        <Router>
            <Switch>
                <Route path="/admin">
                    <AdminLayout>
                        <Switch>
                            <Route exact path="/admin/product">
                                <AdminProductPage {...props} />
                            </Route>
                            <Route exact path="/admin/product/add">
                                <AdminProductAddPage {...props} />
                            </Route>
                            <Route exact path="/admin/product/:id">
                                <AdminProductEditPage {...props} />
                            </Route>
                        </Switch>
                    </AdminLayout>
                </Route>
                <Route>
                    <WebsiteLayout {...props}></WebsiteLayout>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routers
