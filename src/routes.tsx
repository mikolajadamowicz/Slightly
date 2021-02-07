import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import StatisticsScreen from './screens/StatisticsScreen';
import MainScreen from './screens/MainScreen';
import { SafeAreaProvider, useSafeArea } from 'react-native-safe-area-context';
import AppTabBar from './components/AppTabBar';
import useDimensions from './hooks/useDimensions';

const SafeAreaMaterialTopTabBar = ({ ...props }) => {
  const insets = useSafeArea();
  return (
    <View style={{ paddingTop: insets.top }}>
      <AppTabBar {...props} />
    </View>
  );
};

const Tab = createMaterialTopTabNavigator();

const Navigation: React.FC = () => {
  const { width } = useDimensions();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          tabBar={(props) => <SafeAreaMaterialTopTabBar {...props} />}
          initialRouteName="Today"
          initialLayout={{ width }}
          swipeEnabled>
          <Tab.Screen name="Statistics" component={StatisticsScreen} />
          <Tab.Screen name="Today" component={MainScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navigation;