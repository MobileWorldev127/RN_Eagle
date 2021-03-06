import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    Container, Content, Body, Text, Thumbnail, Button, Footer, View, Label, Item, Input, Drawer, Tab, Tabs,
} from 'native-base'
import {
    Keyboard, AsyncStorage, StatusBar, ListView, ScrollView, TouchableOpacity
} from 'react-native'
import styles from './styles'
import images from '../../themes/images'
import { NavigationActions } from 'react-navigation'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import HomeMine from '../../components/HomeMine/index'
import HomeRent from '../../components/HomeRent/index';
import HomeSale from '../../components/HomeSale/index';


class home extends Component<{}>{
    static navigationOptions = {
        header: null,
        gesturesEnabled: false
    }

    constructor(props) {
        super(props);
        this.state = {
            
        }   
    }

    addInspection() {
        var { dispatch } = this.props
        dispatch(NavigationActions.navigate({routeName: 'addInspection', params: {info: []}}))
    }

    render() {
        return(
            <Container style = {styles.container}>
                <StatusBar
                    backgroundColor="black"
                    barStyle="light-content"
                />
                
                <View style = {styles.menuView}>
                    <MaterialCommunityIcons name = 'menu' size = {25} color = 'white' style = {{marginLeft: 10}}
                                onPress={ () => { this.props.navigation.navigate('DrawerOpen') }} />
                    <Label style = {styles.title}>Open Homes</Label>
                    <TouchableOpacity style = {{width: 18, height: 18, marginRight: 15}}/>
                </View>
                 <Tabs initialPage={0} tabBarUnderlineStyle = {{backgroundColor: '#35AA47',height: 3}} locked = {true}>
                    <Tab heading="MINE" textStyle = {styles.inactiveTxt} activeTextStyle = {styles.activeTxt} tabStyle = {{backgroundColor: '#364150'}} activeTabStyle = {{backgroundColor: '#364150'}}> 
                        <HomeMine navigation = {this.props.navigation}/>
                    </Tab>
                    <Tab heading="FOR SALE" textStyle = {styles.inactiveTxt} activeTextStyle = {styles.activeTxt} tabStyle = {{backgroundColor: '#364150'}} activeTabStyle = {{backgroundColor: '#364150'}}> 
                        <HomeSale navigation = {this.props.navigation}/>
                    </Tab>
                    <Tab heading="FOR RENT" textStyle = {styles.inactiveTxt} activeTextStyle = {styles.activeTxt} tabStyle = {{backgroundColor: '#364150'}} activeTabStyle = {{backgroundColor: '#364150'}}> 
                        <HomeRent navigation = {this.props.navigation}/>
                    </Tab>
                </Tabs>
                <TouchableOpacity style = {styles.addBtn} onPress = {() => this.addInspection()}>
                    <Label style = {styles.addTxt}>+</Label>
                </TouchableOpacity>
            </Container>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        token: state.user.token
    }
}

//make this component available to the app
export default connect(mapStateToProps)(home);