import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import FlatCards from './component/FlatCards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;
