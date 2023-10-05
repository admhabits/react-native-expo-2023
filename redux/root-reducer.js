import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import LoginReducer from './login/login.reducer';
import BeritaDanSiaranReducer from './beritaDanSiaran/beritaDanSiaran.reducer';
import PPIDAllTimeReducer from './ppidAllTime/ppidAllTime.reducer';
import PPIDAllTimeReducerPublic from './publicPPIDAllTime/reducer';
import PPIDNecessarilyReducer from './ppidNecessarily/ppidNecessarily.reducer';
import PPIDPeriodicallyReducer from './ppidPeriodically/ppidPeriodically.reducer';
import ppidNeedResponseReducer from './ppidNeedResponse/ppidNeedResponse.reducer';
import ppidNeedForwardReducer from './ppidNeedForward/ppidNeedForward.reducer';
import AsyncStorage from '@react-native-community/async-storage';
import videoReducers from './videoGallery/video.reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['storage', 'loginReducer', 'login'],
};

const rootReducer = combineReducers({
  login: LoginReducer,
  beritaDanSiaran: BeritaDanSiaranReducer,
  allTimePPID: PPIDAllTimeReducer,
  necessarilyPPID: PPIDNecessarilyReducer,
  periodicallyPPID: PPIDPeriodicallyReducer,
  ppidNeedResponse: ppidNeedResponseReducer,
  ppidNeedForward: ppidNeedForwardReducer,
  videoGallery: videoReducers,
  public: PPIDAllTimeReducerPublic,
});

export default persistReducer(persistConfig, rootReducer);
