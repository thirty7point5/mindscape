import React from 'react'

import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { GetstartedMain } from '../screens/GetStarted/getStartedMain'
import { WalkThrough } from '../screens/GetStarted/WalkThrough'
import { Login } from '../screens/Login/login'
import { SignUp } from '../screens/SignUp/signup'
import { ForgotPassword } from '../screens/ForgotPassword/ForgotPassword'
import { ChangePassword } from '../screens/ChangePassword/ChangePassword'
import { OtpVerification } from '../screens/OtpVerification/OtpVerification'
import { EmailVerification } from '../screens/EmailVerification/EmailVerification'
import { FreeTrialSubscription } from '../screens/FreeTrialSubscription/freeTrialSubscription'
import { AccountSecure } from '../screens/AccountSecure/accountSecure'
import { AccountSetting } from '../screens/AccountSecure/accountSetting'
import { Account } from '../screens/AccountSecure/account'
import { Subscription } from '../screens/Subscription/subscription'
import { HomeWelcome } from '../screens/Home/Welcome'
import { HomeSetName } from '../screens/Home/HomeSetname'
import { HomeSetCountry } from '../screens/Home/HomeSetCountry'
import { Breathing } from '../screens/Home/Breathing'
import { HomeWarning } from '../screens/Home/HomeWarning'
import { WeeklyProgress } from '../screens/Home/WeeklyProgress'
import { WeeklyProgress2 } from '../screens/Home/WeeklyProgress2'
import { HomeCommitment } from '../screens/Home/HomeCommitment'
import { HomeRoutine } from '../screens/Home/HomeRoutine'
import { HomePersona } from '../screens/Home/HomePersona'
import { PersonaVirtue } from '../screens/Home/PersonaVirtue'
import { HomeProgram } from '../screens/Home/HomeProgram'
import { BreathingStarted } from '../screens/Home/BreathingStarted'
import { ToolsDashboard } from '../screens/Home/ToolsDashboard'
import { Dashboard } from '../screens/Home/Dashboard'
import { Preference } from '../screens/Preference/Preference'
import { MainAcount } from '../screens/MainAcount/MainAcount'
import { Profile } from '../screens/Profile/Profile'
import { Setting } from '../screens/Setting/setting'
import { Emergency } from '../screens/Emergency/emergency'
import { Emergency2 } from '../screens/Emergency/Emergency2'
import { HelpCenter } from '../screens/HelpCenter/helpcenter'
import { AboutUs } from '../screens/AboutUs/aboutus'
import { TermsCondition } from '../screens/TermsCondition/termsAndCondition'
import { PrivacyPolicy } from '../screens/PrivacyPolicy/privacyPolicy'
import { ContactUs } from '../screens/ContactUs/contactUs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { CustomDrawer } from './CustomDrawer/CustomDrawer'
import { Dashboard1 } from '../screens/Home/Dashboard1'
import { Loading1 } from '../screens/LoadingArticleScreens/Loading1'
import { ArticleScreen } from '../screens/LoadingArticleScreens/ArticleScreen'
import { MorningMessage } from '../screens/SleepCount/MorningMessage'
import { SleepMsg } from '../screens/SleepCount/SleepMsg'
import { SleepHours } from '../screens/SleepCount/sleepHours'
import { PYT1 } from '../screens/PYTScreens/PYT1'
import { PYT2 } from '../screens/PYTScreens/PYT2'
import { PYT3 } from '../screens/PYTScreens/PYT3'
import { PYT4 } from '../screens/PYTScreens/PYT4'
import { NotificationScreen1 } from '../screens/NotificationScreens/NotificationScreen1'
import { NotificationScreen2 } from '../screens/NotificationScreens/NotificationScreen2'
import { MindfullnessSong } from '../screens/MindfullnessSong/MindfullnessSong'

const Stack = createStackNavigator()
const AuthStack = createStackNavigator()
const AppStack = createStackNavigator()
const Drawer = createDrawerNavigator();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="GetStarted">
      <AuthStack.Screen name="GetStarted" component={GetstartedMain} />
      <AuthStack.Screen name="WalkThrough" component={WalkThrough} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <AuthStack.Screen name="ChangePassword" component={ChangePassword} />

      <AuthStack.Screen name="OtpVerification" component={OtpVerification} />
      <AuthStack.Screen name="AccountSecure" component={AccountSecure} />
      <AuthStack.Screen name="AccountSetting" component={AccountSetting} />
      <AuthStack.Screen name="Account" component={Account} />
      <AuthStack.Screen name="FreeTrialSubscription" component={AppStackNavigator} />
      <AuthStack.Screen name="EmailVerification" component={EmailVerification} />

    </AuthStack.Navigator>
  );
}


function MainDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      drawerContentOptions={{
        itemStyle: { marginVertical: 8, marginHorizontal: 8 },
      }}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: "100%",
        },
      }}
      initialRouteName="Home"
      overlayColor="transparent"
      drawerType="front">
      <Drawer.Screen options={{ activeTintColor: "#fff" }} name="c" component={Dashboard} />
      <Drawer.Screen options={{ activeTintColor: "#fff" }} name="Preference" component={Preference} />
      {/* <Drawer.Screen options={{ activeTintColor: "#fff" }} name="Setting" component={Setting} /> */}
      <Drawer.Screen options={{ activeTintColor: "#fff" }} name="MainAcount" component={MainAcount} />
      <Drawer.Screen options={{ activeTintColor: "#fff" }} name="Emergency" component={Emergency} />
      <Drawer.Screen options={{ activeTintColor: "#fff" }} name="Emergency2" component={Emergency2} />
      <Drawer.Screen options={{ activeTintColor: "#fff" }} name="HelpCenter" component={HelpCenter} />
      <Drawer.Screen options={{ activeTintColor: "#fff" }} name="Subscription" component={Subscription} />
      <Drawer.Screen options={{ activeTintColor: "#fff" }} name="AboutUs" component={AboutUs} />
      <Drawer.Screen options={{ activeTintColor: "#fff" }} name="TermsCondition" component={TermsCondition} />
      <Drawer.Screen options={{ activeTintColor: "#fff" }} name="PrivacyPolicy" component={PrivacyPolicy} />
      <Drawer.Screen options={{ activeTintColor: "#fff" }} name="ContactUs" component={ContactUs} />
    </Drawer.Navigator>
  )
}

function AppStackNavigator() {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Subscription">
      <AppStack.Screen name="Subscription" component={FreeTrialSubscription} />
      <AppStack.Screen name="HomeWelcome" component={HomeWelcome} />
      <AppStack.Screen name="HomeSetName" component={HomeSetName} />
      <AppStack.Screen name="HomeSetCountry" component={HomeSetCountry} />
      <AppStack.Screen name="HomeWarning" component={HomeWarning} />
      <AppStack.Screen name="HomeCommitment" component={HomeCommitment} />
      <AppStack.Screen name="WeeklyProgress" component={WeeklyProgress} />
      <AppStack.Screen name="BreathingStarted" component={BreathingStarted} />
      <AppStack.Screen name="WeeklyProgress2" component={WeeklyProgress2} />
      <AppStack.Screen name="Breathing" component={Breathing} />
      <AppStack.Screen name="HomeRoutine" component={HomeRoutine} />
      <AppStack.Screen name="HomeProgram" component={HomeProgram} />
      <AppStack.Screen name="MorningMessage" component={MorningMessage} />
      <AppStack.Screen name="SleepMsg" component={SleepMsg} />
      <AppStack.Screen name="SleepHours" component={SleepHours} />
      <AppStack.Screen name="HomePersona" component={HomePersona} />
      <AppStack.Screen name="PersonaVirtue" component={PersonaVirtue} />
      <AppStack.Screen name="ToolsDashboard" component={ToolsDashboard} />
      <AppStack.Screen name="Dashboard" component={MainDrawer} />
      <AppStack.Screen name="Dashboard1" component={Dashboard1} />
      <AppStack.Screen name="Loading1" component={Loading1} />
      <AppStack.Screen name="ArticleScreen" component={ArticleScreen} />
      <AppStack.Screen name="PYT1" component={PYT1} />
      <AppStack.Screen name="PYT2" component={PYT2} />
      <AppStack.Screen name="PYT3" component={PYT3} />
      <AppStack.Screen name="PYT4" component={PYT4} />
      <AppStack.Screen name="NotificationScreen1" component={NotificationScreen1} />
      <AppStack.Screen name="NotificationScreen2" component={NotificationScreen2} />
    </AppStack.Navigator>
  )
}


const MainNavigation = () => {
  const isLoggedin = true
  return (
    <NavigationContainer theme={{ ...DefaultTheme, dark: true, }}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedin ?
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
            component={AuthStackNavigator}
          />
          :
          <Stack.Screen
            name="AppStack"
            options={{ headerShown: false }}
            component={AppStackNavigator}
          />
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
