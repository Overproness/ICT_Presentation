import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task !== "") {
      setTasks([...tasks, { key: Math.random().toString(), text: task }]);
      setTask("");
    }
  };

  return (
    <View style={{ padding: 30 }}>
      <View>
        <TextInput
          placeholder="Add a new task"
          onChangeText={(text) => setTask(text)}
          value={task}
        />
        <Button title="Add" onPress={addTask} />
      </View>
      <View>
        <Text>Your To-Do List:</Text>
        <FlatList
          data={tasks}
          renderItem={(taskData) => (
            <View>
              <Text>{taskData.item.text}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
