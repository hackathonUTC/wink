'use strict';

var React = require('react-native');

var {
    AppRegistry,
    Image,
    StyleSheet,
    Text,
    View,
    DrawerLayoutAndroid,
    TouchableNativeFeedback,
} = React;

var app = React.createClass({
    openLeftDrawer: function() {
        this.refs['left_drawer'].openDrawer();
    },

    openRightDrawer: function() {
        this.refs['right_drawer'].openDrawer();
    },

    renderLeftMenu: function() {
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Image source={require('./img/logo.png')} style={styles.headerLogo} />
                    </View>
                    <View style={styles.leftUser}>
                        <Image source={{uri: 'https://avatars2.githubusercontent.com/u/1651494?v=0&s=460'}} style={styles.leftPicture} />
                        <Text style={styles.leftName}>Titouan Galopin</Text>
                    </View>
                </View>
            </View>
        );
    },

    renderRightMenu: function() {
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.rightTitle}>Shots</Text>
                        <Image source={require('./img/icons/shots.png')} style={styles.rightIcon} />
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
                renderNavigationView={this.renderLeftMenu}
                ref={'left_drawer'}>

                <DrawerLayoutAndroid
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Right}
                    renderNavigationView={this.renderRightMenu}
                    ref={'right_drawer'}>
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <TouchableNativeFeedback
                                onPress={this.openLeftDrawer}
                                background={TouchableNativeFeedback.SelectableBackground()}>
                                <View style={styles.headerMenuButton}>
                                    <Image source={require('./img/icons/menu.png')} />
                                </View>
                            </TouchableNativeFeedback>

                            <Image source={require('./img/logo.png')} style={styles.headerLogo} />

                            <TouchableNativeFeedback
                                onPress={this.openRightDrawer}
                                background={TouchableNativeFeedback.SelectableBackground()}>
                                <View style={styles.headerShotsButton}>
                                    <Image source={require('./img/icons/shots.png')} />
                                </View>
                            </TouchableNativeFeedback>
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
    headerMenuButton: {
        position: 'absolute',
        left: 0,
        top: 0,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10
    },
    headerShotsButton: {
        position: 'absolute',
        right: 0,
        top: 0,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10
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
    },
    leftUser: {
        flexDirection: 'row',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 45
    },
    leftPicture: {
        width: 70,
        height: 70,
        borderRadius: 36,
        marginTop: 10,
        marginRight: 10,
        marginBottom: 10,
        marginLeft: 10
    },
    leftName: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 28,
        width: 200
    },
    rightTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#ffffff',
        marginTop: 10,
        marginRight: 10
    },
    rightIcon: {
        marginTop: 10
    }
});

AppRegistry.registerComponent('app', () => app);
