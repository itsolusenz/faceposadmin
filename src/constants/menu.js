import {
    Home,
    Box,
    DollarSign,
    Tag,
    Clipboard,
    Camera,
    AlignLeft,
    UserPlus,
    Users,
    Chrome,
    BarChart, Settings, Archive, LogIn
} from 'react-feather';
import jsCookie from 'js-cookie';
export const MENUITEMS = [
    {
        path: '/dashboard', title: `dashboard`, icon: Home, type: 'link', badgeType: 'primary', active: jsCookie.get('pagename') == 'dashboard' ? true : false
    },
    {
        path: '/customer', title: `Customer List`, icon: Box, type: 'link', badgeType: 'primary', active: jsCookie.get('pagename') == 'customer' ? true : false
    },

]
{/*export const MENUITEMS = [
    {
        path: '/dashboard', title: `dashboard`, icon: Home, type: 'link', badgeType: 'primary', active: jsCookie.get('pagename') =='dashboard' ? true:false
    },
    {
        title: 'Accounts Extension', icon: Box, type: 'sub', active: jsCookie.get('pagehead') =='accounts' ? true:false, children: [
           
                    { path: '/accounts/employer/view', title: 'Employer', type: 'sub' , active: jsCookie.get('pagename') =='employer' ? true:false,
                
                    children: [
                       { path: '/accounts/employer/view', title: 'Employer', type: 'link' , active: jsCookie.get('pagename') =='employer' ? true:false},
                       { path: '/accounts/employer/jobpost/view', title: 'Employer Job Post', type: 'link' , active: jsCookie.get('pagename') =='employer' ? true:false},

                     ] 
                
                    },
                    { path: '/accounts/helper/view', title: 'Helper', type: 'link', active: jsCookie.get('pagename') =='helper' ? true:false},
                    { path: '/accounts/supplier/view', title: 'Supplier', type: 'link' , active: jsCookie.get('pagename') =='supplier' ? true:false},
                    { path: '/accounts/vendor/view', title: 'Vendor', type: 'link' , active: jsCookie.get('pagename') =='vendor' ? true:false },
                    { path: '/accounts/admin/view', title: 'Admin', type: 'link'  , active: jsCookie.get('pagename') =='admin' ? true:false},
                ]
           
                 
    }, 
    {
        title: 'Packages extension', icon: DollarSign, type: 'sub', active: false, children: [
            { path: '/packages/list/view', title: 'Listing', type: 'link' },
            { path: '/packages/order/view', title: 'Orders', type: 'link' },
        ]
    },
    {
        title: 'Transactions extension', icon: Tag, type: 'sub', active: false, children: [
            { path: '/transaction/employer/view', title: 'Employer', type: 'link' },
            { path: '/transaction/supplier/view', title: 'Supplier', type: 'link' },
            { path: '/transaction/vendor/view', title: 'Vendor', type: 'link' },
            { path: '/transaction/reservation/view', title: 'Reservation', type: 'link' },
            { path: '/transaction/refund/view', title: 'Refund', type: 'link' },
        ]
    },
    {
        title: 'Employment extension', icon: Clipboard , type: 'sub', active: false, children: [
            { path: '/employment/pass_expiry/view', title: 'Passport expiry', type: 'link' },
            { path: '/employment/wp_expiry/view', title: 'Work permit expiry', type: 'link' },
        ]
    },
    {
        title: 'Import/Export', path: '/media', icon: Camera, type: 'link', active: false
    },
    {
        title: 'Settings extension', path: '/setting', icon: Camera, type: 'link', active: false
    },
   
]*/}
