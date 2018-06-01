
import React from 'react'
import { connect } from 'react-redux'
var { Router, Scene } = require('react-native-router-flux');
import { StackNavigator, addNavigationHelpers, DrawerNavigator } from 'react-navigation'
import login from '../scenes/login/index';
import contacts from '../scenes/contacts/index';
import contactsShow from '../scenes/contactsShow/index';
import listings from '../scenes/listings/index';
import home from '../scenes/home/index';
import tasks from '../scenes/tasks/index';
import Sidebar from '../components/Sidebar/index';
import listingsShow from '../scenes/listingsShow/index';
import homeShow from '../scenes/homeShow/index';
import homeEdit from '../scenes/homeEdit/index';
import tasksShow from '../scenes/tasksShow/index';
import sendEmail from '../scenes/sendEmail/index';
import addContact from '../scenes/addContact/index';
import addNewTask from '../scenes/addNewTask/index';

const Drawer = DrawerNavigator(
    {
        contacts: { screen: contacts },
        listings: { screen: listings},
        home: { screen: home },
        tasks: { screen: tasks },
        sendEmail:{ screen: sendEmail },
    },
    {
        initialRouteName: 'contacts',
        headerMode: 'screen',
        contentComponent: props => <Sidebar {...props}/>
    }
);

export const AppNavigator = StackNavigator({
    login: { screen: login },
    Drawer: { screen: Drawer },
    contactsShow: { screen: contactsShow },
    listingsShow: { screen: listingsShow },
    homeShow: { screen: homeShow },
    homeEdit: { screen: homeEdit },
    tasksShow: { screen: tasksShow },
    addContact: { screen: addContact },
    addNewTask: { screen: addNewTask },
    },{
        headerMode: 'none',
    }
);

const AppWithNavigationState = ({dispatch, nav}) => (
    <AppNavigator navigation={addNavigationHelpers({
        dispatch, 
        state: nav,
        })}
    />
);

const mapStateToProps = state => ({
    nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);