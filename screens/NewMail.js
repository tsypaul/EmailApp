import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Axios from "axios";

const NewMail = ({ navigation }) => {
  const [description, setDescription] = useState("");
  const [to, setTo] = useState("");
  return (
    <View>
      <TextInput
        style={styles.input}
        valueOf={description}
        onChange={e => {
          setDescription(e.target.valueOf);
        }}
      />
      <TextInput
        style={styles.input}
        valueOf={to}
        onChange={e => {
          setTo(e.target.valueOf);
        }}
      />
      <Button
        title="Send"
        onPress={() => {
          navigation.navigate("Mails", { type: "inbox" });
          // axios post update email list
          Axios.post("/sent", {
            id: Math.floor(Math.random() * 10000),
            sender: to,
            description: description,
            type: "sent"
          }).then(res => console.log(res.data));
        }}
      />
    </View>
  );
};

export default NewMail;

const styles = StyleSheet.create({
  input: {
    height: 100,
    backgroundColor: "#fff"
  }
});
