import { authRoles } from './auth/authRoles';

export const navigations = [
  {
    name: 'Dashboard',
    path: '/dashboard/default',
    icon: 'dashboard',
    auth: authRoles.admin,
    showTo: '',
  },
  {
    name: 'Doctors',
    path: '/handover/handover-list',
    icon: 'verified_user',
    showTo: '',
  },

  // {
  //   name: 'Master',
  //   icon: 'add_to_photos',

  //   showTo: '',
  //   children: [
  //     {
  //       name: 'Materials',
  //       path: '/products/productlist',
  //       iconText: 'S',
  //       showTo: '',
  //     },
  // { name: 'Clients', path: '/client/client-list', iconText: 'S', showTo: "Admin" },
  // {
  //   name: 'Employee',
  //   path: '/employee/employeeList-list',
  //   iconText: 'S',
  //   showTo: 'Admin',
  // },
  // {
  //   name: 'Safety Equipment',
  //   path: '/safety-equipment/equipment-list',
  //   iconText: 'S',
  //   showTo: '',
  // },
  // { name: 'Payment', path: '/payment/payment-list', iconText: 'S', showTo: "Admin" },
  // { label: 'PROCESS STAGES', type: 'label' },
  // { name: 'Quotations', path: '/quotation/quotation-list', iconText: 'S', showTo: "Admin" },
  //   ],
  // },
  // { label: 'COMPLETE STAGES', type: 'label' },
  // {
  //   name: 'Session/Auth',
  //   icon: 'security',
  //   children: [
  //     { name: 'Sign in', iconText: 'SI', path: '/session/signin' },
  //     { name: 'Sign up', iconText: 'SU', path: '/session/signup' },
  //     { name: 'Forgot Password', iconText: 'FP', path: '/session/forgot-password' },
  //     { name: 'Error', iconText: '404', path: '/session/404' },
  //   ],
  // },

  // {
  //   name: 'Employee',
  //   icon: 'people',
  //   showTo: '',
  //   children: [
  //     {
  //       name: 'Employee List',
  //       path: '/users/userlist',
  //       iconText: 'U',
  //       showTo: '',
  //     },
  //     {
  //       name: 'Add Employee',
  //       path: '/users/add-user',
  //       iconText: 'A',
  //       showTo: '',
  //     },
  //   ],
  // },
  // {
  //   name: 'Work List',
  //   icon: 'people',
  //   showTo: 'Employee',
  //   children: [
  //     {
  //       name: 'Work List',
  //       path: '/emp/work',
  //       iconText: 'U',
  //       showTo: 'Employee',
  //     },
  //     // { name: 'Add New Survey', path: '/survey/new-survey', iconText: 'U', showTo: "employee" },
  //   ],
  // },
  // {
  //   name: 'All Works',
  //   icon: 'folder_open',

  //   showTo: '',
  //   children: [
  //     {
  //       name: 'Work List',
  //       path: '/orders/order-list',
  //       iconText: 'O',
  //       auth: authRoles.sa,
  //       showTo: '',
  //     },
  //     {
  //       name: 'Add New Work',
  //       path: '/orders/new-order',
  //       iconText: 'A',
  //       showTo: '',
  //     },
  //   ],
  // },

  //  site Survey

  {
    name: 'Rooms',
    icon: 'building',
    showTo: '',
    path: '/survey/survey-list',
    iconText: 'S',
  },
  // {
  //   name: 'Screen Saver',
  //   icon: 'drawing',
  //   showTo: '',
  //   path: '/survey/survey-list',
  //   iconText: 'S',
  // },

  // {
  //   name: 'Drawing',
  //   icon: 'drawing',

  //   showTo: '',
  //   children: [{ name: 'Drawing ', path: '/drawing/drawing-list', showTo: '' }],
  // },

  // {
  //   name: 'Drawing',
  //   icon: 'drawing',
  //   showTo: 'Employee',
  //   children: [{ name: 'Drawing ', path: '/emp/drawinglist', showTo: 'Employee' }],
  // },

  // {
  //   name: 'Approved Drawing ',
  //   icon: 'verified_user',
  //   showTo: "",
  //   children: [

  //     { name: 'Approved Drawing ', path: '/approved-drawing/approved-drawing-list', showTo: "", },
  //   ],
  // },
  // {
  //   name: 'Aluminium ',
  //   icon: 'domain',

  //   showTo: '',
  //   children: [{ name: 'Aluminium', path: '/aluminium/aluminium-list', showTo: '' }],
  // },

  // {
  //   name: 'Aluminium ',
  //   icon: 'domain',
  //   showTo: 'Employee',
  //   children: [{ name: 'Aluminium', path: '/emp/aluminumlist', showTo: 'Employee' }],
  // },

  // {
  //   name: 'Glass / ACP Fixing  ',
  //   icon: 'dynamic_feed',

  //   showTo: '',
  //   children: [
  //     {
  //       name: 'Glass / ACP Fixing ',
  //       path: '/glassacphplfixing/glassacphplfixing-list',
  //       showTo: '',
  //     },
  //   ],
  // },

  // {
  //   name: 'Glass / ACP Fixing  ',
  //   icon: 'dynamic_feed',
  //   showTo: 'Employee',
  //   children: [
  //     {
  //       name: 'Glass / ACP Fixing ',
  //       path: '/emp/glassacplist',
  //       showTo: 'Employee',
  //     },
  //   ],
  // },

  // {
  //   name: 'User ',
  //   icon: 'key',

  //   showTo: '',
  //   children: [{ name: 'Handover', path: '/handover/handover-list', showTo: '' }],
  // },
  // {
  //   name: 'User ',
  //   icon: 'key',
  //   showTo: 'Employee',
  //   children: [{ name: 'Handover', path: '/emp/handoverlist', showTo: 'Employee' }],
  // },

  // {
  //   name: 'Notification',
  //   icon: 'notificationsactiveIcon ',

  //   showTo: '',
  //   children: [{ name: 'Notification ', path: '/notification', showTo: '' }],
  // },
  // {
  //   name: 'Notification ',
  //   icon: 'notificationsactiveIcon',
  //   showTo: 'Employee',
  //   children: [
  //     { name: 'Notification', path: '/emp/notification', showTo: 'Employee' },
  //   ],
  // },
];
