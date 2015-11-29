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
                    <Image source={require('./img/logo.png')} style={styles.image} />
                </View>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    header: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: 45,
        backgroundColor: '#b90727',
    },
    image: {
        marginTop: 5,
        marginLeft: 10
    }
});

AppRegistry.registerComponent('app', () => app);
