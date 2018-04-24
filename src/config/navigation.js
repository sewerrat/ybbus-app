import HomeScreen from "components/Screens/Home/container";
import LoginScreen from "components/Screens/Login/container";
import BusListScreen from "components/Screens/BusList/container";
import TripListScreen from "components/Screens/TripList/container";
import SearchScreen from "components/Screens/Search/container";
import AboutScreen from "components/Screens/About/container";

//import ShowMap from "containers/ShowMap";

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

