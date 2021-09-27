import {} from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Login } from "../Components/Login";
import { Home } from "../Components/Home";
const screen = {
  Login: {
    screen: Login,
  },
  Home: {
    screen: Home,
  },
};
