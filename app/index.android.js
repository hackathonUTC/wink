'use strict';

var React = require('react-native');

var {
    AppRegistry,
    Image,
    StyleSheet,
    Text,
    View,
    DrawerLayoutAndroid,
} = React;

var app = React.createClass({
    renderMenu: function() {
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Image source={require('./img/logo.png')} style={styles.headerLogo} />
                    </View>
                </View>
            </View>
        );
    },

    render: function() {
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={this.renderMenu}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Image source={require('./img/icons/menu.png')} style={styles.headerMenuIcon} />
                        <Image source={require('./img/logo.png')} style={styles.headerLogo} />
                        <Image source={require('./img/icons/shots.png')} style={styles.headerShotsIcon} />
                    </View>
                    <View style={styles.main}>
                        <View style={styles.user}>
                            <Image source={{uri: 'http://images5.fanpop.com/image/photos/29000000/Emma-Stone-s-makeup-makeup-29012581-400-400.jpg'}} style={styles.userImage} />
                            <View style={styles.userBio}>
                                <Text style={styles.userName}>
                                    Emma Stone
                                </Text>
                                <Text style={styles.userAge}>
                                    27 ans - GI06
                                </Text>
                            </View>
                        </View>

                        <View style={styles.actions}>
                            <View style={styles.actionChapButton}>
                                <Image source={require('./img/icons/cross.png')} style={styles.actionChapImage} />
                                <Text style={styles.actionButton}>Chap</Text>
                            </View>
                            <View style={styles.actionShotgunButton}>
                                <Image source={require('./img/icons/shotgun.png')} style={styles.actionShotgunImage} />
                                <Text style={styles.actionButton}>Shotgun</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </DrawerLayoutAndroid>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    header: {
        flexDirection: 'row',
        position: 'absolute',
        left: 0,
        right: 0,
        height: 45,
        backgroundColor: '#b90727',
        justifyContent: 'center'
    },
    headerLogo: {
        marginTop: 5,
        marginLeft: 10
    },
    headerMenuIcon: {
        position: 'absolute',
        left: 10,
        top: 10
    },
    headerShotsIcon: {
        position: 'absolute',
        right: 10,
        top: 10
    },
    main: {
        flexDirection: 'column',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 45
    },
    user: {
        flexDirection: 'row',
        marginTop: 10,
        marginRight: 10,
        marginBottom: 10,
        marginLeft: 10,
        backgroundColor: 'white'
    },
    userBio: {
        flexDirection: 'column'
    },
    userImage: {
        width: 200,
        height: 200,
        marginRight: 15
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 10,
        width: 165
    },
    userAge: {
        fontSize: 15,
        marginTop: 10,
        width: 165
    },
    actions: {
        flexDirection: 'row',
        marginRight: 10,
        marginLeft: 10
    },
    actionChapButton: {
        flex: 1,
        backgroundColor: '#d7525b',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 15,
        marginRight: 5
    },
    actionShotgunButton: {
        flex: 1,
        backgroundColor: '#32af9e',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 15,
        marginLeft: 5
    },
    actionButton: {
        fontSize: 18,
        color: '#ffffff',
        marginTop: 10
    }
});

AppRegistry.registerComponent('app', () => app);
