import React from 'react';
import { StyleSheet, Text, View, Modal, Button } from 'react-native';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      show:false
    }
  }
  render() {
    return (
      <View style={{ flex: 1, marginTop:100, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>View Text</Text>
        <Button title="Show Modal" onPress={() =>{this.setState({show: true})}}/>
          <Modal
          transparent={true}
          visible={this.state.show}
          >
          <View style={{backgroundColor:"#000000aa", flex:1}}>
            <View style={{ backgroundColor:"#ffffff", marginLeft: 25, marginRight: 25, marginTop: 45, marginBottom: 25, padding: 40, borderRadius: 20, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30 }}>Modal Text</Text>
            <Button title="Close Modal" onPress={() =>{this.setState({show: false})}}/>
            </View>

          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 60
  },
});

export default App;
