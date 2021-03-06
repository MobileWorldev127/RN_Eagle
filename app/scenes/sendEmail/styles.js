import { Dimensions, Platform, StatusBar } from 'react-native';
const { width, height } = Dimensions.get('window')

export default {
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    menuView: {
        width: width,
        height: (Platform.OS == 'ios')? 64: 76,
        paddingTop: (Platform.OS == 'ios')? 20 : StatusBar.currentHeight,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor: '#2B3643',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'open-sans-bold',
        marginLeft: 15
    },
    titleView: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    sendTxt: {
        color: 'white',
        fontSize: 17,
        fontFamily: 'open-sans-regular'
    },
    mainView: {
        flex: 1,
    },
    toView: {
        width: width,
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between',
    },
    ccView: {
        width: width,
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 30,
        justifyContent: 'space-between',
        marginTop: 0,
    },
    bccView: {
        width: width,
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 30,
        justifyContent: 'space-between',
        marginTop: 10
    },
    subView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    eachEmailSubView: {
        flexDirection:  'row',
        alignItems: 'center',
        marginRight: 10,
        marginVertical: 3
    },
    contactSubView: {
        flexDirection: 'row',
        paddingRight: 5,
        minHeight: 24,
        borderRadius: 12,
        backgroundColor: '#e0e0e0',
        alignItems: 'center',
    },
    avatarImg: {
        width: 20,
        height: 20,
        resizeMode: 'cover',
        borderRadius: 10,
        overflow: 'hidden',
    },
    label1: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'left',
    },
    nameTxt: {
        fontSize: 13,
        color: 'black',
        marginLeft: 5
    },
    subjectView: {
        flexDirection: 'row',
        width: width,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    view1: {
        flexDirection: 'row',
        width: width,
        padding: 15,
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: 'lightgray',
        flex:1
    },
    view2: {
        width: width,
        padding: 15,
        borderTopWidth: 1,
        borderColor: 'lightgray',
    },
    emailContentSubView: {
        width: width - 80, 
        marginLeft: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    inputTxt: {
        backgroundColor: 'transparent',
        color: 'black',
        fontSize: 16,
        fontFamily: 'open-sans-regular',
        width: width - 30
    },
    inputTxt1: {
        backgroundColor: 'transparent',
        color: 'black',
        fontSize: 16,
        fontFamily: 'open-sans-regular',
        width: width/5,
        height: 24,
        marginVertical: 3,
    },
    emailView: {
        width: width,
        padding: 15,
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: 'lightgray'
    },

    content: {
        padding: 20,
        backgroundColor: '#fff'
    },
    header: {
        backgroundColor: '#F5FCFF',
        padding: 10
    },
    headerText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500'
    },
    popView: {
        width: width - 30,
        position: 'absolute',
        top: 123,
        left: 15,
        backgroundColor: '#f1f1f1',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: 'lightgray'
    },
    popView1: {
        width: width - 30,
        position: 'absolute',
        top: 159,
        left: 15,
        backgroundColor: '#f1f1f1',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: 'lightgray'
    },
    popView2: {
        width: width - 30,
        position: 'absolute',
        top: 197,
        left: 15,
        backgroundColor: '#f1f1f1',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: 'lightgray'
    },
    itemTxt: {
        fontSize: 14,
        paddingVertical: 7,
        color: 'black'
    },
    eachAttachView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 10,
    },
    eachAttachTxt: {
        color: '#888e95',
        fontSize: 12,
        marginLeft: 5
    },
    checkImg: {
        width: 12,
        height: 12,
        resizeMode: 'cover',
        marginRight: 5,
        tintColor: '#888e95',
    },
    selectoptionView: {
        borderWidth : 0, 
        borderColor : "#e3e3e3", 
        height: 20, 
        width: width - 50
    },
    selectedTxt: {
        backgroundColor: 'transparent',
        color: 'black',
        fontSize: 16,
        fontFamily: 'open-sans-regular',
        marginTop: -5,
        marginLeft: -10,
    },
    optionList_template: {
        width: width*0.8, 
        height: 180,
        backgroundColor: 'white',
    },
    optiontxt: {
        fontSize: 18,
        fontFamily: 'open-sans-regular',
    },
}