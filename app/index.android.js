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
    render: function() {
 
  var navigationView = (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('./img/logo.png')} style={styles.image} />
                </View>
            </View>
    </View>
  );
  return (
    <DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={() => navigationView}>
      <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('./img/logo.png')} style={styles.image} />
                </View>
            </View>
    </DrawerLayoutAndroid>
  );
},
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
