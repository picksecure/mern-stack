import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import paths from './paths';
import Layout from '../components/layout';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import GalleryPage from '../pages/GalleryPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import ProductListPage from '../pages/ProductListPage';
/*Protected User Routes */
import UserCartDetailsPage from '../pages/user/UserCartDetailsPage';
import UserOrderDetailsPage from '../pages/user/UserOrderDetailsPage';
import UserOrdersPage from '../pages/user/UserOrdersPage';
import UserProfilePage from '../pages/user/UserProfilePage';
/*Protected Admin Routes */
import AdminAnalyticsPage from '../pages/admin/AdminAnalyticsPage';
import AdminChatsPage from '../pages/admin/AdminChatsPage';
import AdminEditProductPage from '../pages/admin/AdminEditProductPage';
import AdminEditSettingsPage from '../pages/admin/AdminEditSettingsPage';
import AdminOrderDetailsPage from '../pages/admin/AdminOrderDetailsPage';
import AdminOrdersPage from '../pages/admin/AdminOrdersPage';
import AdminProductsPage from '../pages/admin/AdminProductsPage';
import AdminUsersPage from '../pages/admin/AdminUsersPage';
import AdminCreateProductPage from '../pages/admin/AdminCreateProductPage';
import AdminEditUserPage from '../pages/admin/AdminEditUserPage';
import AdminContactPage from '../pages/admin/AdminContactPage';

import RoutesWithUserChatComponent from '../components/user/RoutesWithUserChatComponent';
import ScrollToTop from '../utils/ScrollToTop';
import NotFoundPage from '../pages/notFoundPage';
import ProtectedRoutesComponent from '../components/ProtectedRoutesComponent';

const RouterComponent = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Layout>
                <Routes>
                    <Route element={<RoutesWithUserChatComponent />}>
                        <Route path={paths.ROOT} caseSensitive={false} element={<HomePage />} />
                        <Route path={paths.CART} caseSensitive={false} element={<CartPage />} />
                        <Route path={paths.CUSTOMBUILDS} caseSensitive={false} element={<GalleryPage />} />
                        <Route path={paths.LOGIN} caseSensitive={false} element={<LoginPage />} />
                        <Route path={paths.REGISTER} caseSensitive={false} element={<RegisterPage />} />
                        <Route path={paths.PRODUCTDETAILID} caseSensitive={false} element={<ProductDetailsPage />} />
                        <Route path={paths.PRODUCTLIST} caseSensitive={false} element={<ProductListPage />} />
                        <Route path={paths.PRODUCTLISTPAGENUM} caseSensitive={false} element={<ProductListPage />} />
                        <Route path={paths.PRODUCTLISTCATEGORY} caseSensitive={false} element={<ProductListPage />} />
                        <Route path={paths.PRODUCTLISTCATEGORYPAGE} caseSensitive={false} element={<ProductListPage />} />
                        <Route path={paths.PRODUCTLISTCATEGORYSEARCH} caseSensitive={false} element={<ProductListPage />} />
                        <Route path={paths.PRODUCTLISTCATEGORYSEARCHPAGE} caseSensitive={false} element={<ProductListPage />} />
                        <Route path={paths.PRODUCTLISTPAGENUM} caseSensitive={false} element={<ProductListPage />} />
                        <Route path={paths.PRODUCTLISTSEARCH} caseSensitive={false} element={<ProductListPage />} />

                    </Route>
                    {/*Protected User Routes */}
                    <Route element={<ProtectedRoutesComponent admin={false} />}>
                        <Route path={paths.USERCARTDETAIL} caseSensitive={false} element={<UserCartDetailsPage />} />
                        <Route path={paths.USERORDERDETAILID} caseSensitive={false} element={<UserOrderDetailsPage />} />
                        <Route path={paths.USERORDER} caseSensitive={false} element={<UserOrdersPage />} />
                        <Route path={paths.USERPROFILE} caseSensitive={false} element={<UserProfilePage />} />
                        </Route>
                    {/*Protected Admin Routes */}
                    <Route element={<ProtectedRoutesComponent admin={true} />}>
                        <Route path={paths.ADMINANALYTICS} caseSensitive={false} element={<AdminAnalyticsPage />} />
                        <Route path={paths.ADMINCHATS} caseSensitive={false} element={<AdminChatsPage />} />
                        <Route path={paths.ADMINCREATEPRODUCT} caseSensitive={false} element={<AdminCreateProductPage />} />
                        <Route path={paths.ADMINEDITPRODUCT} caseSensitive={false} element={<AdminEditProductPage />} />
                        <Route path={paths.ADMINEDITUSER} caseSensitive={false} element={<AdminEditUserPage />} />
                        <Route path={paths.ADMINORDERDETAILS} caseSensitive={false} element={<AdminOrderDetailsPage />} />
                        <Route path={paths.ADMINORDERS} caseSensitive={false} element={<AdminOrdersPage />} />
                        <Route path={paths.ADMINPRODUCTS} caseSensitive={false} element={<AdminProductsPage />} />
                        <Route path={paths.ADMINUSERS} caseSensitive={false} element={<AdminUsersPage />} />
                        <Route path={paths.ADMINSETTINGS} caseSensitive={false} element={<AdminEditSettingsPage />} />
                        <Route path={paths.ADMINMESSAGE} caseSensitive={false} element={<AdminContactPage />} />
                    </Route>
                    <Route path={paths.NOTFOUND} caseSensitive={false} element={<NotFoundPage />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default RouterComponent;