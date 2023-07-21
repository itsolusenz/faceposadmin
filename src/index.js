import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.scss";
import App from "./components/app";
import PerfectScrollbar from "react-perfect-scrollbar";

// Components
import Dashboard from "./components/dashboard";
import Customer from "./components/accounts/customer/view";
// Products physical 

import Sub_category from "./components/accounts/helper/view";
import Product_list from "./components/accounts/employer/product-list";
import Add_product from "./components/accounts/employer/add-product";
import Product_detail from "./components/accounts/employer/product-detail";

//Product Digital
import Digital_category from "./components/products/digital/digital-category";
import Digital_sub_category from "./components/products/digital/digital-sub-category";
import Digital_pro_list from "./components/products/digital/digital-pro-list";
import Digital_add_pro from "./components/products/digital/digital-add-pro";

//Sales
import Orders from "./components/sales/orders";
import Transactions_sales from "./components/sales/transactions-sales";
//Coupons
import ListCoupons from "./components/coupons/list-coupons";
import Create_coupons from "./components/coupons/create-coupons";

//Pages
import ListPages from "./components/pages/list-page";
import Create_page from "./components/pages/create-page";
import Media from "./components/media/media";
import List_menu from "./components/menus/list-menu";
import Create_menu from "./components/menus/create-menu";
import List_user from "./components/users/list-user";
import Create_user from "./components/users/create-user";
import List_vendors from "./components/vendors/list-vendors";



import Category from "./components/accounts/employer/view";
import Empjobpost from "./components/accounts/employerjobpost/view";
import Add_helper from "./components/accounts/helper/add";
import Add_supplier from "./components/accounts/supplier/add";
import View_supplier from "./components/accounts/supplier/view";
import Add_vendor from "./components/accounts/vendor/add";
import View_vendor from "./components/accounts/vendor/view";
import Add_admin from "./components/accounts/admin/add";
import View_admin from "./components/accounts/admin/view";
import Add_plist from "./components/packages/list/add";
import View_plist from "./components/packages/list/view";
import Add_porder from "./components/packages/order/add";
import View_porder from "./components/packages/order/view";
import Add_temployer from "./components/transaction/employer/add";
import Add_empjob from "./components/accounts/employerjobpost/add";
import View_temployer from "./components/transaction/employer/view";
import Add_tsupplier from "./components/transaction/supplier/add";
import View_tsupplier from "./components/transaction/supplier/view";
import Add_tvendor from "./components/transaction/vendor/add";
import View_tvendor from "./components/transaction/vendor/view";
import Add_treservation from "./components/transaction/reservation/add";
import View_treservation from "./components/transaction/reservation/view";
import Add_trefund from "./components/transaction/refund/add";
import View_trefund from "./components/transaction/refund/view";
import Add_pass_expiry from "./components/employment/pass_expiry/add";
import View_pass_expiry from "./components/employment/pass_expiry/view";
import Add_wp_expiry from "./components/employment/wp_expiry/add";
import View_wp_expiry from "./components/employment/wp_expiry/view";
import View_settings from "./components/settings/setting";





import Create_vendors from "./components/vendors/create.vendors";
import Translations from "./components/localization/translations";
import Rates from "./components/localization/rates";
import Taxes from "./components/localization/taxes";
import Profile from "./components/accounts/employer/add";
import Reports from "./components/reports/report";
import Invoice from "./components/invoice";
import Datatable from "./components/common/datatable";
import Login from "./components/auth/login";

const Root = () => {
	return (
		<BrowserRouter basename={"/"}>
			<PerfectScrollbar>
				<Switch>
					<Route exact path={`${process.env.PUBLIC_URL}/`} component={Login} />
					<Route
						exact
						path={`${process.env.PUBLIC_URL}/auth/login`}
						component={Login}
					/>

					<App>
						<Route
							path={`${process.env.PUBLIC_URL}/dashboard`}
							component={Dashboard}
						/>

						<Route
							path={`${process.env.PUBLIC_URL}/customer`}
							component={Customer}
						/>

						<Route
							path={`${process.env.PUBLIC_URL}/accounts/employer/view`}
							component={Category}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/accounts/employer/jobpost/view`}
							component={Empjobpost}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/accounts/helper/view`}
							component={Sub_category}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/accounts/emloyer/sub-category`}
							component={Sub_category}
						/>

						<Route
							path={`${process.env.PUBLIC_URL}/accounts/emloyer/product-list`}
							component={Product_list}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/accounts/emloyer/product-detail`}
							component={Product_detail}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/accounts/emloyer/add-product`}
							component={Add_product}
						/>

						<Route
							path={`${process.env.PUBLIC_URL}/products/digital/digital-category`}
							component={Digital_category}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/products/digital/digital-sub-category`}
							component={Digital_sub_category}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/products/digital/digital-product-list`}
							component={Digital_pro_list}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/products/digital/digital-add-product`}
							component={Digital_add_pro}
						/>

						<Route
							path={`${process.env.PUBLIC_URL}/sales/orders`}
							component={Orders}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/sales/transactions`}
							component={Transactions_sales}
						/>

						<Route
							path={`${process.env.PUBLIC_URL}/coupons/list-coupons`}
							component={ListCoupons}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/coupons/create-coupons`}
							component={Create_coupons}
						/>

						<Route
							path={`${process.env.PUBLIC_URL}/pages/list-page`}
							component={ListPages}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/pages/create-page`}
							component={Create_page}
						/>

						<Route path={`${process.env.PUBLIC_URL}/media`} component={Media} />

						<Route
							path={`${process.env.PUBLIC_URL}/menus/list-menu`}
							component={List_menu}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/menus/create-menu`}
							component={Create_menu}
						/>

						<Route
							path={`${process.env.PUBLIC_URL}/users/list-user`}
							component={List_user}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/users/create-user`}
							component={Create_user}
						/>

						<Route
							path={`${process.env.PUBLIC_URL}/vendors/list_vendors`}
							component={List_vendors}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/accounts/helper/add`}
							component={Add_helper}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/accounts/helper/edit/:helperid/:resumeid`}
							component={Add_helper}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/accounts/supplier/add`}
							component={Add_supplier}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/accounts/vendor/view`}
							component={View_vendor}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/accounts/vendor/add`}
							component={Add_vendor}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/accounts/admin/view`}
							component={View_admin}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/accounts/admin/add`}
							component={Add_admin}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/accounts/admin/edit/:id`}
							component={Add_admin}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/packages/list/view`}
							component={View_plist}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/packages/list/add`}
							component={Add_plist}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/packages/order/view`}
							component={View_porder}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/packages/order/add`}
							component={Add_porder}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/transaction/employer/add`}
							component={Add_temployer}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/accounts/employer/jobpost/add`}
							component={Add_empjob}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/accounts/employer/jobpost/edit/:jobid`}
							component={Add_empjob}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/transaction/employer/view`}
							component={View_temployer}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/transaction/supplier/add`}
							component={Add_tsupplier}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/transaction/supplier/view`}
							component={View_tsupplier}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/transaction/vendor/add`}
							component={Add_tvendor}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/transaction/vendor/view`}
							component={View_tvendor}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/transaction/reservation/add`}
							component={Add_treservation}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/transaction/reservation/view`}
							component={View_treservation}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/transaction/refund/view`}
							component={View_trefund}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/transaction/refund/add`}
							component={Add_trefund}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/employment/pass_expiry/view`}
							component={View_pass_expiry}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/employment/pass_expiry/add`}
							component={Add_pass_expiry}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/employment/wp_expiry/view`}
							component={View_wp_expiry}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/employment/wp_expiry/add`}
							component={Add_wp_expiry}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/setting`}
							component={View_settings}
						/>


						<Route
							path={`${process.env.PUBLIC_URL}/accounts/supplier/view`}
							component={View_supplier}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/vendors/create-vendors`}
							component={Create_vendors}
						/>

						<Route
							path={`${process.env.PUBLIC_URL}/localization/transactions`}
							component={Translations}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/localization/currency-rates`}
							component={Rates}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/localization/taxes`}
							component={Taxes}
						/>

						<Route
							path={`${process.env.PUBLIC_URL}/reports/report`}
							component={Reports}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/accounts/employer/add`}
							component={Profile}
						/>
						<Route
							path={`${process.env.PUBLIC_URL}/accounts/employer/edit/:empid`}
							component={Profile}
						/>


						<Route
							path={`${process.env.PUBLIC_URL}/settings/profile`}
							component={Profile}
						/>

						<Route
							path={`${process.env.PUBLIC_URL}/invoice`}
							component={Invoice}
						/>

						<Route
							path={`${process.env.PUBLIC_URL}/data-table`}
							component={Datatable}
						/>
					</App>
				</Switch>
			</PerfectScrollbar>
		</BrowserRouter>
	);
};

ReactDOM.render(<Root />, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
