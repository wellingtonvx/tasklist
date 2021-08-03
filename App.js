import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Task } from "./src/components/Task";

import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard,
  Modal,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { CreateTask } from "./src/pages/CreateTask";

export default function App() {
  const [taskModalOpen, setTaskModalOpen] = useState(false);
  const [taskItems, setTaskItems] = useState([]);

  function completeTask(index) {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);

    setTaskItems(itemsCopy);
  }

  function handleCloseTaskModal() {
    setTaskModalOpen(false);
  }
  function handleOpenTaskModal() {
    setTaskModalOpen(true);
  }

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Lista de Tarefas</Text>

        <View style={styles.items}>
          {taskItems.map((item, index) => (
            <TouchableOpacity key={index} onPress={completeTask}>
              <Task text={item} />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TouchableOpacity
          style={styles.addWrapper}
          onPress={handleOpenTaskModal}
        >
          <Text style={styles.addText}>Nova Tarefa</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      <Modal visible={taskModalOpen}>
        <CreateTask
          closeTaskModal={handleCloseTaskModal}
          setTaskItems={setTaskItems}
          taskItems={taskItems}
        />
      </Modal>

      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#c0c0c0",
  },

  addWrapper: {
    width: "90%",
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#c0c0c0",
    alignItems: "center",
    justifyContent: "center",
    margin: 12,
  },
  addText: {},
});
