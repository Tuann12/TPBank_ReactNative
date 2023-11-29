import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Component/Login';
import MyTabs from './Component/MyTabs';
import TransferMoney from './Component/TransferMoney';
import SearchBank from './Component/SearchBank';
import Transaction from './Component/Transaction';
import { DataProvider } from './Component/DataContext';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <DataProvider>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="MyTabs" component={MyTabs} />
                    <Stack.Screen name="TransferMoney" component={TransferMoney} />
                    <Stack.Screen name="SearchBank" component={SearchBank} />
                    <Stack.Screen name="Transaction" component={Transaction} />
                </Stack.Navigator>
            </DataProvider>
        </NavigationContainer>
    );
}
