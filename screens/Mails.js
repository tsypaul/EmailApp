import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Axios from "axios";

export default class Mails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emails: [
        { id: 1, sender: "Paul", description: "haha", type: "inbox" },
        { id: 2, sender: "Jason", description: "haha", type: "inbox" },
        { id: 3, sender: "Paul", description: "I am lucky", type: "inbox" },
        { id: 4, sender: "Paul", description: "yes", type: "inbox" },
        { id: 5, sender: "Yuki", description: "Business", type: "inbox" },
        { id: 6, sender: "Paul", description: "Business", type: "inbox" },
        {
          id: 7,
          sender: "Yuki",
          description: "Looking forward to meet u",
          type: "inbox"
        },
        { id: 8, sender: "John", description: "haha", type: "inbox" },
        {
          id: 9,
          sender: "Paul",
          description: "I am on my way",
          type: "archive"
        }
      ],
      query: ""
    };
  }

  //   componentDidMount() {
  //     const { navigation } = this.props;
  //     const type = navigation.state.params.type;
  //     Axios.get("/" + type).then(res => {
  //       this.setState({
  //         emails: res.data
  //       });
  //     });
  //   }

  handleDelete(id) {
    this.setState({
      emails: this.state.emails.filter(email => {
        email.id !== id;
      })
    });
  }

  handleSearch() {
    this.setState({
      emails: this.state.emails.filter(email => {
        email.sender === this.state.query;
      })
    });
  }

  handleArchive(id) {
    // const obj = this.state.emails.find(email => {
    //   email.id === id;
    // });
    // const newObj = {
    //   id,
    //   sender,
    //   description,
    //   type: "archive"
    // };
    // const list = [
    //   this.state.emails.filter(email => {
    //     email.id !== id;
    //   }),
    //   newObj
    // ];
    // this.setState({
    //   emails: list
    // });
  }

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <TextInput
          style={styles.input}
          valueOf={this.state.query}
          onChange={e => {
            this.setState({ query: e.target.valueOf });
          }}
        />
        <Button
          title="Search"
          onPress={() => {
            this.handleSearch.bind(this);
          }}
        />
        <View>
          {this.state.emails.map(email => {
            return (
              <MailItem
                email={email}
                key={email.id}
                handleDelete={this.handleDelete.bind(this)}
                handleArchive={this.handleArchive.bind(this)}
              />
            );
          })}
        </View>
        <Button
          title="New"
          onPress={() => navigation.navigate("NewMail")}
        ></Button>
      </View>
    );
  }
}

const MailItem = ({ email, handleDelete, handleArchive }) => {
  return (
    <View style={styles.email}>
      <View style={styles.container}>
        <Text style={styles.sender}>From: {email.sender}</Text>
        <Text style={styles.description}>{email.description}</Text>
      </View>
      <Button
        title="Delete"
        style={styles.button}
        onPress={() => {
          handleDelete(email.id);
          console.log(email.id);
        }}
      />
      <Button
        title="Archive"
        style={styles.button}
        onPress={() => {
          handleArchive(email.id);
          console.log(email.id);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    backgroundColor: "#fff"
  },
  email: {
    flexDirection: "row",
    padding: 2,
    borderTopColor: "#333",
    borderTopWidth: 0.3,
    borderBottomColor: "#333",
    borderBottomWidth: 0.3
  },
  description: {
    marginLeft: 20,
    fontSize: 20
  },
  container: {
    flex: 1
  },
  sender: {
    fontSize: 20,
    marginLeft: 20
  },
  button: {
    flexDirection: "row",
    alignSelf: "flex-end"
  }
});
