import Vue from 'vue';
import Router from 'vue-router';
import Welcome from '@/components/Welcome';
import TabScreen from '@/components/TabScreen';
import QuestionView from '@/components/QuestionView';
import AnswerView from '@/components/AnswerView';
import ProfileView from '@/components/ProfileView';
import GiveAnswer from '@/components/GiveAnswer';
import ReadAnswer from '@/components/ReadAnswer';
import WriteQuestion from '@/components/WriteQuestion';
import WriteFeedback from '@/components/WriteFeedback';
import OptionsView from '@/components/OptionsView';

Vue.use(Router);

export default new Router({  
    routes: [
    {
      path:'/login',
      name:'login',
      component: Welcome
    },{
      path: '/options',
      name: 'options',
      component: OptionsView
    },
    {
      path:'/',
      name:'main',
      component: TabScreen,
      children: [
        {
          path: 'q',
          component: QuestionView,
        },
        {
          path: 'a',
          component: AnswerView,
        },
        {
          path: 'p',
          component: ProfileView
        },
        {
          name:'writeanswer',
          path:'aw',
          component: GiveAnswer,
          props: true
          },
          {
            name:'readanswer',
            path:'re',
            component: ReadAnswer,
            props: true
          },
          {
            name:'writequestion',
            path:'new',
            component: WriteQuestion
          },
          {
            name:'writefeedback',
            path:'fb',
            component: WriteFeedback
          }
      ]
    },
  ]})