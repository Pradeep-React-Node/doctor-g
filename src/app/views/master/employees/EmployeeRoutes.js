import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const EmployeeList = Loadable(lazy(() => import('./employee-list/EmployeeList')));
const AddNewEmployee = Loadable(lazy(() => import('./add-employee/AddNewEmployee')));
const EditEmployee = Loadable(lazy(() => import('./edit-employee/EditEmployee')));
const EmployeeDetail = Loadable(lazy(() => import('./employee-details/EmployeeDetails')));


const employeeRoutes = [
  {
    path: '/employee/employeeList-list',
    element: <EmployeeList />,
  },
  {
    path: '/employee/add-employee',
    element: <AddNewEmployee />,
  },
  {
    path: '/employee/edit-employee',
    element: <EditEmployee />,
  },
  {
    path: '/employee/employee-detail',
    element: <EmployeeDetail />,
  },

];

export default employeeRoutes;
