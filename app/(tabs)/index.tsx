import { AppRegistry } from 'react-native';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { useRouter} from 'expo-router'
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";


const App = () => {

  const router= useRouter();
  useEffect(()=>{
    setTimeout(()=>{
    router.push('/(tabs)/TabNavigator')
  },1000);
  },[])

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    if (title && amount) {
      setExpenses([...expenses, { id: Date.now().toString(), title, amount: parseFloat(amount) }]);
      setTitle('');
      setAmount('');
    }
  };

  const totalExpense = expenses.reduce((sum, item) => sum + item.amount, 0);

  return (
    <View style={styles.container}>
      
      <Text style={styles.heading}>Expense Tracker</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Title" 
        value={title} 
        onChangeText={setTitle} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Amount" 
        value={amount} 
        onChangeText={setAmount} 
        keyboardType="numeric" 
      />
      <Button title="Add Expense" onPress={addExpense} />
      <Text style={styles.total}>Total: ${totalExpense.toFixed(2)}</Text>
      <FlatList 
        data={expenses} 
        keyExtractor={(item) => item.id} 
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.title}: ${item.amount.toFixed(2)}</Text>
        )} 
      />
  
      <TabNavigator />
 
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  total: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  item: { fontSize: 16, padding: 5 },
});

export default App;
