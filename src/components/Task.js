import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export function Task({ text, completeTask }) {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>

        <Text style={styles.itemText}>{text.task}</Text>
        <Text style={styles.itemText}>{text.taskType}</Text>
        <Text style={styles.itemText}>{text.date}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    borderRadius: 5,
    marginRight: 15,
    opacity: 0.4,
  },
  itemText: {},
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
    marginLeft: 8,
  },
});
