import { DrawerNavigationProp } from "@react-navigation/drawer";
import { ParamListBase } from "@react-navigation/native";

export interface AppScreenProps {
    navigation?: DrawerNavigationProp<ParamListBase> | undefined,
}