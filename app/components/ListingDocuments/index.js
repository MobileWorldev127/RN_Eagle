//import libraries
import React, { Component } from 'react';
import { StyleSheet, StatusBar, Image, TouchableOpacity, RefreshControl, AsyncStorage, ActivityIndicator, ScrollView} from 'react-native';
import {
    Content, Text, List, ListItem, Icon, Container, Left, Right, Button, View, Label, Thumbnail,Item
} from 'native-base'
import { connect } from 'react-redux'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './styles'
import images from '../../themes/images'
import { getListingsDocuments } from '../../actions'
import { BallIndicator } from 'react-native-indicators'

var documentList = [
    {title: 'Contract of sale.pdf'},
    {title: 'Statement of Information.pdf'},
]

// create a component
class ListingDocuments extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoading: true,
            documentList:[]
        }
    }

    componentWillMount() {
        getListingsDocuments(this.props.token, this.props.listings_about.id).then(data => {
            console.log('-->')
            console.log(data)
            this.setState({
                isLoading: false,
                documentList: data.data
            })
        })
    }

    renderRow(item, index) {
        text = item.attributes.url;
        parts = text.split('%2F');
        return(
            <View style = {styles.view1} key = {index}>
                <MaterialCommunityIcons name = 'file-pdf' size = {20} color = '#757575' />
                <Label numberOfLines={1} ellipsizeMode ={'tail'} style = {styles.titleTxt}>{parts[2]}</Label>
                <View style = {styles.downloadView}>
                    <Label style = {styles.downloadTxt}>DOWNLOAD</Label>
                </View>
                <View style = {[styles.downloadView, {width: 45, marginLeft: 6}]}>
                    <Label style = {styles.downloadTxt}>SEND</Label>
                </View>
            </View>
        )
    }
    
    showContactDocuments(){
        if(this.state.documentList.length > 0){
            return(
                this.state.documentList.map((item, index) => {
                    return(this.renderRow(item, index))
                })
            )
        }
        else{
            return(
                <Label style = {styles.nomoretxt}>There's nothing here.</Label>
            )
        } 
    }

    render() {
        return (
            <Content style = {styles.container} showsVerticalScrollIndicator = {false}>
                {
                    this.state.isLoading? <BallIndicator color = {'#2B3643'}  style = {{marginTop: 100, marginBottom: 10}}/> : this.showContactDocuments()
                } 
            </Content>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        token: state.user.token, 
        listings_about: state.listings.listings
    }
}

export default connect(mapStateToProps)(ListingDocuments)

