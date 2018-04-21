import HomeScreen from "mallin-app/src/containers/Screens/Home";
import LoginScreen from "mallin-app/src/containers/Screens/Login";
import BusListScreen from "mallin-app/src/containers/Screens/BusList";
import TripListScreen from "mallin-app/src/components/Screens/TripList";
import SearchScreen from "mallin-app/src/components/Screens/SearchScreen";
import AboutScreen from "mallin-app/src/components/Screens/AboutScreen";

//import ShowMap from "mallin-app/src/containers/ShowMap";

export const routes = [
    {
        name: "Home",
        title: "Home",
        screen: HomeScreen,
        showInMenu: true
    },
    {
        name: "Login",
        title: "Login",
        screen: LoginScreen,
        showInMenu: true
    },
    { 
        name: "Bus",
        title: "Bus",
        screen: BusListScreen,
        showInMenu: false
    },
    { 
        name: "Trip",
        title: "Trip",
        screen: TripListScreen,
        showInMenu: true
    },
    { 
        name: "About",
        title: "About",
        screen: AboutScreen,
        showInMenu: true
    },
    { 
        name: "Search",
        title: "Search",
        screen: SearchScreen,
        showInMenu: true
    }
]

