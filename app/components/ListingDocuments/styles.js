import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window')

export default {
    container: {
        flex: 1,
        backgroundColor: '#ddd'
    },
    view1: {
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderColor:'lightgray',
    },
    rowSubView: {
        marginLeft: 15,
        flex: 1
    },
    avatarImg: {
        width: 30,
        height: 30,
        resizeMode: 'cover',
    },
    titleTxt: {
        color:'black',
        fontSize: 16, 
        fontFamily: 'open-sans-regular',
        marginLeft: 10,
        flex: 1
    },
    line1: {
        height: 1,
        width: 200,
    },
    favoriteDate: {
        fontSize: 11,
        color: '#999',
        marginLeft: 10,
        fontFamily: 'open-sans-regular',
    },
    favoriteImg: {
        width: 20,
        height : 20,
        resizeMode: 'contain',
        marginTop: 5
    },
    favoriteView: {
        alignItems: 'center',
        marginLeft: 10
    },
    nomoretxt: {
        marginTop: 25,
        width: width,
        textAlign: 'center',
        fontSize: 16, 
        color: '#364150',
        fontFamily: 'open-sans-bold',
    },
    downloadView: {
        width: 75,
        height: 26,
        borderRadius: 8,
        backgroundColor: '#2B3643',
        alignItems: 'center',
        justifyContent: 'center'
    },
    downloadTxt: {
        color: 'white',
        fontSize: 10,
        fontFamily: 'open-sans-regular'
    },
}