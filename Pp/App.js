import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NotAuthenticated } from './components/NoAuth/routes';
import { AuthenticatedRoutes } from './components/Auth/routes';

const styles = StyleSheet.create ( {
  container: {
    flex: 1,
    backgroundColor: 'fff',
  },
});

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AuthenticatedRoutes />
        {/* <NotAuthenticated/> */}
      </View>
    );
  }
}

export default App;