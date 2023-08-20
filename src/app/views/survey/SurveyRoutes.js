import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
// import SurveyList from './survey-list/SurveyList';

const NewSurvey = Loadable(lazy(() => import('./new-survey/NewSurvey')));
const SurveyDetail = Loadable(lazy(() => import('./survey-details/SurveyDetails')));
const SurveyList = Loadable(lazy(() => import('./survey-list/SurveyList')));
const UpdateSurvey = Loadable(lazy(() => import('./edit-survey/EditSurvey')));


const surveyRoutes = [
  {
    path: '/survey/new-survey',
    element: <NewSurvey />,
  },
  {
    path: '/survey/survey-list',
    element: <SurveyList />,
  },
  {
    path: '/survey/survey-detail',
    element: <SurveyDetail />,
  },
  {
    path: '/survey/edit-survey',
    element: <UpdateSurvey />,
  },
];

export default surveyRoutes;
