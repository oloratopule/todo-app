import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {
  Ionicons,
  AntDesign,
  Octicons,
  FontAwesome5,
} from '@expo/vector-icons';

import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card, RadioButton, TextInput, Button } from 'react-native-paper';

function App() {
  const [getText, setText] = useState('');
  const [getPriority, setPriority] = useState('');
  const [getList, setList] = useState([]);
  const [checked, setChecked] = React.useState('first');

  const addItem = () => {
    let obj = {
      item: getText,
      priority: getPriority,
    };
    setList([...getList, obj]);
    setText('');
    setPriority('');
  };

  const removeItem = (itemKey) => {
    setList((list) => getList.filter((item) => item != itemKey));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <Text style={styles.tit}>What's the plan for today?</Text>
      <FontAwesome5 name="tasks" size={24} color="#790C5A" />

      <View>
        <Text style={{ fontSize: 26 }}>{getText}</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        {getList.map((item) => (
          <View>
            {item.priority == 'High' ? (
              <TouchableOpacity
                key={item.item}
                activeOpacity={0.5}
                onPress={() => removeItem(item)}>
                <View style={styles.scrollviewItem}>
                  <Text style={styles.scrollviewText}>{item.item}</Text>
                  <View style={styles.crossTextContainer}>
                    <Text style={styles.crossText}>
                      <AntDesign name="delete" size={15} color="white" />
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ) : (
              <View>
                {item.priority == 'Medium' ? (
                  <TouchableOpacity
                    key={item.item}
                    activeOpacity={0.5}
                    onPress={() => removeItem(item)}>
                    <View style={styles.scrollviewItemMedium}>
                      <Text style={styles.scrollviewText}>{item.item}</Text>
                      <View style={styles.crossTextContainer}>
                        <Text style={styles.crossText}>
                          <AntDesign name="delete" size={15} color="white" />
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                ) : (
                  <View>
                    {item.priority == 'Low' ? (
                      <TouchableOpacity
                        key={item.item}
                        activeOpacity={0.5}
                        onPress={() => removeItem(item)}>
                        <View style={styles.scrollviewItemLow}>
                          <Text style={styles.scrollviewText}>{item.item}</Text>
                          <View style={styles.crossTextContainer}>
                            <Text style={styles.crossText}>
                              <AntDesign
                                name="delete"
                                size={15}
                                color="white"
                              />
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    ) : (
                      alert('Error')
                    )}
                  </View>
                )}
              </View>
            )}
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          label="Enter Todo"
          value={getText}
          onChangeText={(text) => setText(text)}
        />
      </View>

      <View style={styles.radioButton}>
        <RadioButton.Group
          onValueChange={(newValue) => setPriority(newValue)}
          value={getPriority}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <RadioButton value="High" />
            <Text style={{ paddingTop: '9%' }}>High Priority</Text>
          </View>

          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <RadioButton value="Medium" />
            <Text style={{ paddingTop: '8.5%' }}>Average Priority</Text>
          </View>

          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <RadioButton value="Low" />
            <Text style={{ paddingTop: '8%' }}>Low Priority</Text>
          </View>
        </RadioButton.Group>
      </View>
      <Button title="Add" onPress={addItem} style={styles.addButton}>
        Add Todo
      </Button>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    color: '#790C5A',
  },
  tit: {
    fontSize: 20,
    color: '#790C5A',
    marginTop: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#FFF5DA',
    fontFamily: 'roboto',
  },
  inputContainer: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  scrollviewItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#DF2E2E',
    width: '80%',
    margin: 5,
    borderRadius: 10,
  },
  scrollviewItemMedium: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FF5200',
    width: '80%',
    margin: 5,
    borderRadius: 10,
  },
  scrollviewItemLow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFB740',
    width: '80%',
    margin: 5,
    borderRadius: 10,
  },

  scrollView: {
    width: '100%',
  },
  scrollviewText: {
    fontSize: 20,
    color: 'white',
    marginLeft: 25,
  },
  crossText: {
    fontWeight: 100,
    marginTop: 4,
    marginRight: 25,
  },
  addButton: {
    backgroundColor: '#FFDFAF',
    width: 210,
    marginBottom: 10,
  },
  radioButton: {
    marginLeft: -100,
  },
});
