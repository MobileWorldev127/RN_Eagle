import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    Container, Content, Body, Text, Thumbnail, Button, Footer, View, Label, Item, Input, Drawer
} from 'native-base'
import {
    Keyboard, AsyncStorage, StatusBar, ListView, ScrollView, TouchableOpacity
} from 'react-native'
import styles from './styles'
import images from '../../themes/images'
import Search from 'react-native-search-box';
import { NavigationActions, Header } from 'react-navigation'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { Font } from 'expo'
import { getProperties, getThumbnailUrl } from '../../actions'
import { BallIndicator } from 'react-native-indicators'


class propertyIndex extends Component<{}>{
    static navigationOptions = {
        header: null,
        gesturesEnabled: false
    }

    constructor(props) {
        super(props);
        
        this.state = {
            isLoading: true,
            searchText: '',
            listingsList: [],
            search_listingsList: [],
        }   
    }

    componentWillMount() {
        var list = []
        getProperties(this.props.token).then(data => {
            this.setState({
                isLoading: false,
                listingsList: data.data,
                search_listingsList: data.data,
            })
        })
    }

    clickListing(item, index) {
        var { dispatch } = this.props;
        dispatch ({ type: 'SELECTED_PROPERTY_FOR_TASK', data: item})
        Keyboard.dismiss(); 
        this.props.navigation.goBack()
    }

    showForSale(item){
        if(item.attributes.listing_type == "residential_rental"){
            return(
                <Label style = {styles.saleTxt}>For Rent</Label>
            )
        }
        else if(item.listing_type == 'commercial' && item.commercial_listing_type == "commercial_lease"){
            return(
                <Label style = {styles.saleTxt}>For Rent</Label>
            )
        }
        else if(item.commercial_listing_type == "commercial_sale_and_lease"){
            return(
                <Label style = {styles.saleTxt}>For Sale And Rent</Label>
            )
        }
        else {
            return(
                <Label style = {styles.saleTxt}>For Sale</Label>
            )
        }
    }

    capitalizeListingTypeTag(text){
        var res = text.split('_')
        var newRes = []
        for(var i = 0 ; i < res.length ; i++){
            newRes.push(res[i].charAt(0).toUpperCase() + res[i].slice(1))
        }
        return newRes.join(' ')
    }

    renderRow(item, index) {
        return(
            <TouchableOpacity key = {index} onPress = {() => this.clickListing(item, index)}>
                <View style = {styles.rowView}>
                    {
                        item.attributes.thumbnail?<Thumbnail square source = {{uri:item.attributes.thumbnail }} style = {styles.avatarImg} defaultSource = {images.placeholderImage}/> :
                        <Thumbnail square style = {styles.avatarImg} source = {images.placeholderImage}/>
                    }
                    
                    <View style = {styles.rowSubView}>
                        <Label style = {styles.label1}>{item.attributes.full_address}</Label>
                        <View style = {styles.tagView}>
                            <View style = {styles.eachtag}>
                                <Label style = {styles.labeltag}>{this.capitalizeListingTypeTag(item.attributes.listing_type)}</Label>
                            </View>
                            <View style = {styles.eachtag}>
                                <Label style = {styles.labeltag}>{this.capitalizeListingTypeTag(item.attributes.property_type)}</Label>
                            </View>
                        </View>
                    </View>
                    {
                        this.showForSale(item)
                    }
                    <View style = {styles.line}/>
                </View>
            </TouchableOpacity>
        )
    }

    filterStates = (value) => {
        if(value){
            this.setState({
                search_listingsList: this.state.listingsList.filter(item => item.attributes.full_address.toLowerCase().includes(value.toLowerCase())),
            })
        }
        else {
            this.setState({
                search_listingsList: this.state.listingsList,
            })
        }
    }

    render() {
        return(
            <Container style = {styles.container}>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />
                <View style = {styles.menuView}>
                    <TouchableOpacity style = {styles.backBtn} onPress={ () => { Keyboard.dismiss(); this.props.navigation.goBack();  }}>
                        <Thumbnail square source = {images.ic_back_btn} style = {styles.backImg}/>
                    </TouchableOpacity>
                    <Label style = {styles.title}>Listings</Label>
                    <View style = {styles.blankView} />
                </View>
                <Content showsVerticalScrollIndicator = {false}>
                    <View style = {styles.searchBoxView}>
                        <Search
                            ref = 'search'
                            titleCancelColor = 'black'
                            backgroundColor = 'lightgray'
                            
                            contentWidth = {100}
                            searchIconCollapsedMargin = {30}
                            searchIconExpandedMargin = {10}
                            placeholderCollapsedMargin = {15}
                            placeholderExpandedMargin = {25}
                            onChangeText={this.filterStates}
                            onCancel = {this.onCancel}
                        />
                    </View>
                    
                    {
                        this.state.isLoading? <BallIndicator color = {'#2B3643'}  style = {{marginTop: 100, marginBottom: 10}}/> :
                        this.state.search_listingsList.map((item, index) => {
                            return(this.renderRow(item, index))
                        })
                    }
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        token: state.user.token, 
    }
}

//make this component available to the app
export default connect(mapStateToProps)(propertyIndex);