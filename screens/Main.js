import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const Main = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Inbox"
        onPress={() => navigation.navigate("Mails", { type: "inbox" })}
      />
      <Button
        title="Sent"
        onPress={() => navigation.navigate("Mails", { type: "sent" })}
      />
      <Button
        title="Archive"
        onPress={() => navigation.navigate("Mails", { type: "archive" })}
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({});
