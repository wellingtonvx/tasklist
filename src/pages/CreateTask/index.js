import React, { useState } from "react";
import DatePicker from "react-native-datepicker";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export function CreateTask({ closeTaskModal, setTaskItems, taskItems }) {
  const [date, setDate] = useState(new Date());
  const [task, setTask] = useState();
  const [taskType, setTasType] = useState();

  function handldeCreateTask() {
    const data = {
      task,
      taskType,
      date,
    };

    setTaskItems([...taskItems, data]);
    setTasType("");
    setTask("");

    closeTaskModal(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Nome da Tarefa</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite uma nova tarefa"
        onChangeText={(text) => setTask(text)}
        value={task}
      />

      <DatePicker style={styles.date} date={date} onDateChange={setDate} />

      <TextInput
        style={styles.input}
        placeholder="Tipo de tarefa"
        onChangeText={(text) => setTasType(text)}
        value={taskType}
      />
      <View>
        <TouchableOpacity style={styles.button} onPress={handldeCreateTask}>
          <Text>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#E8EAED",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    width: "80%",
    paddingVertical: 16,
    paddingHorizontal: 18,
    fontSize: 18,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  date: {
    width: "80%",
  },
  button: {
    width: "80%",
    backgroundColor: "#a7e4c2",
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 5,
  },
});
