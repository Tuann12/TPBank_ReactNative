import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';
import Transfer from './Transfer';
import Search from './Search';
import Setting from './Setting';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Transfer" component={Transfer} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Setting" component={Setting} />
        </Tab.Navigator>
    );
}

export default MyTabs;
