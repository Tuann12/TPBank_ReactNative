import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from './Home';
import Transfer from './Transfer';
import Search from './Search';
import Setting from './Setting';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Trang chủ') {
                        iconName = focused ? 'home' : 'home';
                    } else if (route.name === 'Chuyển khoản') {
                        iconName = focused ? 'bank-transfer' : 'bank-transfer';
                    } else if (route.name === ' ') {
                        iconName = focused ? 'qrcode-scan' : 'qrcode-scan';
                    } else if (route.name === 'Tra cứu') {
                        iconName = focused ? 'card-search' : 'card-search-outline';
                    } else if (route.name === 'Cài đặt') {
                        iconName = focused ? 'cog' : 'cog-outline';
                    }

                    return <MaterialCommunityIcons name={iconName} size={40} color={color} />;
                },
                headerShown: false,
                tabBarActiveTintColor: '#4722B0',
                tabBarInactiveTintColor: '#555061',
                tabBarScrollEnabled: true,
                tabBarStyle: {
                    color: 'white',
                    backgroundColor: '#201729',
                    borderTopColor: '#555061',
                    height: 70,
                    padding: 10,
                },
                tabBarLabelStyle: {
                    fontSize: 14,
                    color: '#FFFF',
                },
            })}
        >
            <Tab.Screen name="Trang chủ" component={Home} />
            <Tab.Screen name="Chuyển khoản" component={Transfer} />
            <Tab.Screen name=" " component={Home} />
            <Tab.Screen name="Tra cứu" component={Search} />
            <Tab.Screen name="Cài đặt" component={Setting} />
        </Tab.Navigator>
    );
}

export default MyTabs;
