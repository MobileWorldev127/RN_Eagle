import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container, Content, ody, Text, Thumbnail, Button, Footer, View, Label, Item, Input, 
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import { 
    Animated, Keyboard, AsyncStorage, TextInput, TouchableOpacity, ScrollView, Modal, Dimensions
} from 'react-native';
import styles from './styles';
import images from '../../themes/images'
import Icon1 from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

class SelectAddPropertyModal extends Component<{}>{
    static navigationOptions = {
        header: null,
        gesturesEnabled: false
    }

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render(){
        return(
            <View style = {styles.modalView}>
                <TouchableOpacity style = {styles.blankView} onPress = { this.props.onClickedBack}>
                </TouchableOpacity>
                
                <View style = {styles.modalMainView}>
                    <View>
                        <TouchableOpacity onPress = { this.props.onClickedNewNote}>
                            <Text style = {styles.selecttxt}>New Note</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = { this.props.onClickedNewEnquiry}>
                            <Text style = {styles.selecttxt}>New Enquiry</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = { this.props.onClickedNewInspectionAttendee}>
                            <Text style = {styles.selecttxt}>New Inspection Attendee</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = { this.props.onClickedNewInspectionTime}>
                            <Text style = {styles.selecttxt}>New Inspection Time</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = { this.props.onClickedNewOffer}>
                            <Text style = {styles.selecttxt}>New Offer</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = { this.props.onClickedNewTask}>
                            <Text style = {styles.selecttxt}>New Task</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style = {styles.cancelBtn} onPress = { this.props.onClickedBack}>
                        <Text style = {styles.cancelText}>CANCEL</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default connect()(SelectAddPropertyModal);