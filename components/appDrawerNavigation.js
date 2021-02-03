    import {createDrawerNavigator} from 'react-navigation-drawer'
    import {AppTabNavigator} from './AppTabNavigator'
    import CostumSideBarMenu from './CostumSideBarMenu'
    export const AppDrawerNavigator = createDrawerNavigator({
        Home:{screen:AppTabNavigator}
    },{
        contentComponent:CostumSideBarMenu
    },{'initialRouteName':"Home"})