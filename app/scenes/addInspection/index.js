import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    Container, Content, Body, Text, Thumbnail, Button, Footer, View, Label, Item, Input, Tab, Tabs, ScrollableTab
} from 'native-base'
import {
    Keyboard, AsyncStorage, StatusBar, ListView, ScrollView, TouchableOpacity, Modal, Animated, Platform, TextInput, Dimensions
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './styles'
import images from '../../themes/images'
import { NavigationActions } from 'react-navigation'
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { updateContactGroup, createNewContact } from '../../actions'
import { BallIndicator } from 'react-native-indicators'
import { KeyboardAwareScrollView, KeyboardAwareSectionView } from 'react-native-keyboard-aware-scroll-view'
import {Select, Option} from "react-native-chooser";
import Icon1 from 'react-native-vector-icons/Ionicons';
import reactNativeTextinputEffects from 'react-native-textinput-effects';
import DatePicker from 'react-native-datepicker'

const { width, height } = Dimensions.get('window')

class addInspection extends Component<{}>{
    static navigationOptions = {
        header: null,
        gesturesEnabled: false
    }

    constructor(props) {
        super(props);
        this.state = {
            propertyName: '',
            propertyId: '',
            startDate: '',
            endDate: '',
            listingInfo: []
        }
    }

    componentWillMount() {
        var now = new Date(); 
        now.setHours(now.getHours(), now.getMinutes() + 30)

        this.setState({
            propertyName: this.props.navigation.state.params.info.attributes? this.props.navigation.state.params.info.attributes.full_address : null,
            startDate: new Date(),
            endDate: now
        })
    }s

    componentWillReceiveProps(nextProps) {
        if(nextProps.selected_propertyForTask.length != 0){
            this.setState({
                propertyName: nextProps.selected_propertyForTask.attributes.full_address,
                propertyId: nextProps.selected_propertyForTask.id,
            })
        }
    }

    
    onCancel(){
        Keyboard.dismiss(); 
        this.props.navigation.goBack()
    }

    onSelectProperty() {
        var { dispatch } = this.props
        dispatch(NavigationActions.navigate({routeName: 'propertyIndex'}))
    }

    render() {
        return(
            <Container style = {styles.container}>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />
                
                <View style = {styles.menuView}>
                    <TouchableOpacity style = {styles.backBtn} onPress={ () => this.onCancel()}>
                        <Thumbnail square source = {images.ic_back_btn} style = {styles.backImg}/>
                    </TouchableOpacity>
                    <View style = {styles.titleView}>
                        <Label style = {styles.title}>Add new inspection</Label>
                    </View>
                    <TouchableOpacity onPress = {() => this.onSaveContact()}>
                        <Label style = {styles.saveTxt}>Save</Label>
                    </TouchableOpacity>
                </View>

                <KeyboardAwareScrollView 
                    style = {styles.container}
                    enableOnAndroid
                    extraHeight={Platform.OS === "android" ? -500 : undefined}
                    scrollEnabled = {true}
                >
                    <TouchableOpacity style = {styles.view1}  onPress = {() => this.onSelectProperty()}>
                        <Label style = {this.state.propertyName? styles.label1 : styles.label2}>Select property</Label>
                        {
                            this.state.propertyName? <Label style = {styles.contactTxt}>{this.state.propertyName}</Label> : null
                        }
                        <View style = {styles.seperateLine}/>
                    </TouchableOpacity>
                    <View style = {styles.view1}>
                        <Label style = {styles.label1}>Start date</Label>
                        <DatePicker
                            style={{width: width - 30}}
                            date={this.state.startDate}
                            mode="datetime"
                            format="MMM Do YYYY h:mm a"
                            minDate="1970-05-01"
                            maxDate="2030-06-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            showIcon={false}
                            customStyles={{
                                dateInput: {
                                    borderWidth: 0
                                },
                                dateText: styles.dateTxt
                            }}
                            onDateChange={(date) => {this.setState({startDate: date});}}
                        />
                        <View style = {styles.seperateLine}/>
                    </View>

                    <View style = {styles.view1}>
                        <Label style = {styles.label1}>End date</Label>
                        <DatePicker
                            style={{width: width - 30}}
                            date={this.state.endDate}
                            mode="datetime"
                            format="MMM Do YYYY h:mm a"
                            minDate="1970-05-01"
                            maxDate="2030-06-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            showIcon={false}
                            customStyles={{
                                dateInput: {
                                    borderWidth: 0
                                },
                                dateText: styles.dateTxt
                            }}
                            onDateChange={(date) => {this.setState({endDate: date});}}
                        />
                        <View style = {styles.seperateLine}/>
                    </View>


                </KeyboardAwareScrollView>
                
            </Container>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        token: state.user.token, 
        selected_propertyForTask: state.listings.selected_propertyForTask,
        relationship_inspection: state.home.selected_inspection,
    }
}

//make this component available to the app
export default connect(mapStateToProps)(addInspection);

