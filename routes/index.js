import React from 'react';

// import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from 'login';
import Home from 'home';
import register from 'register';
import DashboardAdmin from 'dashboardadmin';
import NewsAndBroadcast from 'newsandbroadcast';
import Profile from 'profile';
import ProfileHome from 'profilehome';
import DetailPPID from '../modules/ManagementAdmin/DetailPPID';
import ManagementAdminNewsAndBroadcast from '../modules/ManagementAdmin/ManagementNewsAndBroadcast';
import CreateManagementAdminNewsAndBroadcast from '../modules/ManagementAdmin/ManagementNewsAndBroadcast/create';
import ManagementPPIDAllTime from '../modules/ManagementAdmin/ManagementPPIDAllTime';
import ManagementAdminPPIDPeriodically from '../modules/ManagementAdmin/ManagementPPIDPeriodically';
import CreateManagementAdminPPIDPeriodically from '../modules/ManagementAdmin/ManagementPPIDPeriodically/create';
import CreateManagementPPIDAllTIme from '../modules/ManagementAdmin/ManagementPPIDAllTime/create';
import ManagementPPIDNecessarily from '../modules/ManagementAdmin/ManagementPPIDNecessarily';
import CreateManagementPPIDNecessarily from '../modules/ManagementAdmin/ManagementPPIDNecessarily/create';
import ManagementPPIDNeedToBeStraightened from '../modules/ManagementAdmin/ManagementPPIDNeedToBeStraightened';
import CreateManagementPPIDNeedToBeStraightened from '../modules/ManagementAdmin/ManagementPPIDNeedToBeStraightened/create';
import ManagementPPIDNoResponseYet from '../modules/ManagementAdmin/ManagementPPIDNoResponseYet';
import CreateManagementPPIDNoResponseYet from '../modules/ManagementAdmin/ManagementPPIDNoResponseYet/create';
import ManagementPPIDNeedVerification from '../modules/ManagementAdmin/ManagementPPIDNeedVerification';
import CreateManagementPPIDNeedVerification from '../modules/ManagementAdmin/ManagementPPIDNeedVerification/create';
import HubungiKami from '../modules/HubungiKami';
import InformasiProsedure from '../modules/InformasiProsedure';
import ModalMenu from '../components/Modal/ModalMenu';
import DraftPeraturan from '../modules/DraftPeraturan';
import Peraturan from '../modules/Peraturan';
import Perjanjian from '../modules/Perjanjian';
import Dokumen from '../modules/Dokumen';
import Berita from '../modules/Berita';
import SiaranPers from '../modules/SiaranPers';
import GaleriFoto from '../modules/GaleriFoto';
import GaleriVidio from '../modules/GaleriVidio';
import Pengumuman from '../modules/Pengumuman';
import Newsletter from '../modules/Newsletter';
import Maklumat from '../modules/Maklumat';
import ProfilePPID from '../modules/ProfilePPID';
import InformasiPublik from '../modules/InformasiPublik';
import PermohonanInformasi from '../modules/PermohonanInformasi';
import ListPermohonanInformasi from '../modules/PermohonanInformasi/listPermohonan';
import CreatePermohonanInformasi from '../modules/PermohonanInformasi/addPermohonan';
import DetailPost from '../modules/DetailPost';
import Notification from '../modules/Notification';
import { DownloadFiles, PdfThumb } from 'shared';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DashboardAdmin"
          component={DashboardAdmin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailPost"
          component={DetailPost}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewsAndBroadcast"
          component={NewsAndBroadcast}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="DownloadFiles"
          component={DownloadFiles}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="DetailPPID"
          component={DetailPPID}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ManagementAdminNewsAndBroadcast"
          component={ManagementAdminNewsAndBroadcast}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateManagementAdminNewsAndBroadcast"
          component={CreateManagementAdminNewsAndBroadcast}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateManagementPPIDPeriodically"
          component={CreateManagementAdminPPIDPeriodically}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ManagementPPIDPeriodically"
          component={ManagementAdminPPIDPeriodically}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ManagementPPIDAllTime"
          component={ManagementPPIDAllTime}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateManagementPPIDAllTime"
          component={CreateManagementPPIDAllTIme}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ManagementPPIDNecessarily"
          component={ManagementPPIDNecessarily}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateManagementPPIDNecessarily"
          component={CreateManagementPPIDNecessarily}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ManagementPPIDNeedToBeStraightened"
          component={ManagementPPIDNeedToBeStraightened}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateManagementPPIDNeedToBeStraightened"
          component={CreateManagementPPIDNeedToBeStraightened}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ManagementPPIDNoResponseYet"
          component={ManagementPPIDNoResponseYet}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateManagementPPIDNoResponseYet"
          component={CreateManagementPPIDNoResponseYet}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ManagementPPIDNeedVerification"
          component={ManagementPPIDNeedVerification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateManagementPPIDNeedVerification"
          component={CreateManagementPPIDNeedVerification}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="HubungiKami"
          component={HubungiKami}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="InformasiProsedure"
          component={InformasiProsedure}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="DraftPeraturan"
          component={DraftPeraturan}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Peraturan"
          component={Peraturan}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Perjanjian"
          component={Perjanjian}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dokumen"
          component={Dokumen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Berita"
          component={Berita}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SiaranPers"
          component={SiaranPers}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GaleriFoto"
          component={GaleriFoto}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GaleriVidio"
          component={GaleriVidio}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Pengumuman"
          component={Pengumuman}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Newsletter"
          component={Newsletter}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Maklumat"
          component={Maklumat}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfilePPID"
          component={ProfilePPID}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="InformasiPublik"
          component={InformasiPublik}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfileHome"
          component={ProfileHome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PermohonanInformasi"
          component={PermohonanInformasi}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ListPermohonanInformasi"
          component={ListPermohonanInformasi}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreatePermohonanInformasi"
          component={CreatePermohonanInformasi}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="PDFPages"
          component={PdfThumb}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
