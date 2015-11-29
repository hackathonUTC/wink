'use strict';

var React = require('react-native');

var {
    AppRegistry,
    Image,
    StyleSheet,
    Text,
    View,
} = React;

var app = React.createClass({
    render: function() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('./img/icons/menu.png')} style={styles.headerMenuIcon} />
                    <Image source={require('./img/logo.png')} style={styles.headerLogo} />
                    <Image source={require('./img/icons/shots.png')} style={styles.headerShotsIcon} />
                </View>
                <View style={styles.main}>
                    <Text>Hello</Text>
                </View>
            </View>
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
    }
});

AppRegistry.registerComponent('app', () => app);
