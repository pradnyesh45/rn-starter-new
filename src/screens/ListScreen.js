import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Firend #1", age: 20 },
    { name: "Firend #2", age: 45 },
    { name: "Firend #3", age: 32 },
    { name: "Firend #4", age: 27 },
    { name: "Firend #5", age: 53 },
    { name: "Firend #6", age: 55 },
    { name: "Firend #7", age: 30 },
    { name: "Firend #8", age: 48 },
    { name: "Firend #9", age: 76 },
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
