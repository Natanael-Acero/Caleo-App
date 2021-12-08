import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";
import { Home } from "../screens/Home/Home.screen"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from '../styles/colors.styles';
import { Profile } from '../screens/Profile/Profile.screen';
import { Cars } from '../screens/Cars/Cars.screen';


const Tab = createBottomTabNavigator();

export const TabsComponent = ({ user }) => {
    return (
        <>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === "HomeScreen") {
                            iconName = focused
                                ? "grid"
                                : "grid-outline";
                        }
                        if (route.name === "My profile") {
                            iconName = focused
                                ? "person-circle"
                                : "person-circle-outline";
                        }
                        if (route.name === "My cars") {
                            iconName = focused
                                ? "car-sport"
                                : "car-sport-outline";
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: "black",
                    tabBarInactiveTintColor: "grey",
                })}
            >
                <Tab.Screen name="HomeScreen" options={{
                    title: 'Cajónes',
                    headerStyle: {
                        backgroundColor: colors.primary
                    },
                    tabBarActiveTintColor: colors.primary
                }}  >
                    {() => <Home user={user} />}
                </Tab.Screen>


                <Tab.Screen name="My cars" options={{
                    title: 'Mis carros',
                    headerStyle: {
                        backgroundColor: colors.secundary
                    },
                    headerShown: false,
                    tabBarActiveTintColor: colors.secundary
                }}  >
                    {() => <Cars user={user} />}
                </Tab.Screen>

                <Tab.Screen name="My profile" options={{
                    title: 'Perfil',
                    headerStyle: {
                        backgroundColor: colors.secundary
                    },
                    tabBarActiveTintColor: colors.secundary
                }}  >
                    {() => <Profile user={user} />}
                </Tab.Screen>

            </Tab.Navigator>
        </>
    )

}
