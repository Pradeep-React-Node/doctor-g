import { combineReducers } from 'redux';
import ApproveDrawingReducer from './ApproveDrawingReducer';
import ClientReducer from './ClientReducer';
import DrawingReducer from './DrawingReducer';
import EcommerceReducer from './EcommerceReducer';
import EmployeeReducer from './EmployeeReducer';
import NavigationReducer from './NavigationReducer';
import NotificationReducer from './NotificationReducer';
import OrderReducer from './OrderReducer';
import PaymentReducer from './PaymentReducer';
import ProductReducer from './ProductReducer';
import QuotationReducer from './QuotationReducer';
import SafetyequipmentReducer from './SafetyequipmentReducer';
import SurveyReducer from './SurveyReducer';
import UserReducer from './UserReducer';
import HandoverReducer from './HandoverReducer';
import GlassAcpHplFixingReducer from './GlassAcpHplFixingReducer';
import AluminiumReducer from './AluminiumReducer';
import UploadImageReducer from './UploadimageReducer';


const RootReducer = combineReducers({
  notifications: NotificationReducer,
  navigations: NavigationReducer,
  ecommerce: EcommerceReducer,
  orders: OrderReducer,
  user:UserReducer,
  survey:SurveyReducer,
  products:ProductReducer,
  clients:ClientReducer,
  employees:EmployeeReducer,
  safetyequipment:SafetyequipmentReducer,
  payments:PaymentReducer,
  quotation:QuotationReducer,
  drawings:DrawingReducer,
  approvedrawings:ApproveDrawingReducer,
  handover:HandoverReducer,
  glassacphplfixing:GlassAcpHplFixingReducer,
  aluminiums:AluminiumReducer,
  uploadimages:UploadImageReducer,
});

export default RootReducer;
