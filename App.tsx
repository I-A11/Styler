import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import FlatCards from './component/FlatCards';
import ElevatedCards from './component/ElevatedCards';
import FancyCards from './component/FancyCards';
import ActionCard from './component/ActionCard';
import ContactList from './component/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCards />
        <ContactList />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;
