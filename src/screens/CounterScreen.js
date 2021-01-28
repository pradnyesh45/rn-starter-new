import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const COUNT = 1;

const reducer = (state, action) => {};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          // Don't do this;
          // counter++;
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text> Current Count: {counter} </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
