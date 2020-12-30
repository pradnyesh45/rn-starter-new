import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Firend #1" },
    { name: "Firend #2" },
    { name: "Firend #3" },
    { name: "Firend #4" },
    { name: "Firend #5" },
    { name: "Firend #6" },
    { name: "Firend #7" },
    { name: "Firend #8" },
    { name: "Firend #9" },
  ];

  return (
    <FlatList
      data={friends}
      renderItem={({ item }) => {
        return <Text>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default ListScreen;
