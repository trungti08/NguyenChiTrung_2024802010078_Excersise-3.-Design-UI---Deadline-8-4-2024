import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native';

const App = () => {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

  const onPressLogin = () => {
    if (!email || !passwd) {
      Alert.alert("Vui lòng nhập tên người dùng và mật khẩu");
      return;
    }
    Alert.alert(`Đăng nhập thành công với tên người dùng là ${email} và mật khẩu là ${passwd}`);
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{ uri: 'https://gamelade.vn/wp-content/uploads/2024/03/pokemon-go-logo-1.png' }}
      />
       <Text style={styles.registerText}>REGISTER</Text>
      <TextInput style={styles.textInput} onChangeText={setEmail} placeholder='USERNAME' value={email} />
      <TextInput style={styles.textInput} onChangeText={setPasswd} placeholder='PASSWORD' secureTextEntry value={passwd} />
      <TouchableOpacity style={styles.button} onPress={onPressLogin}>
        <Text style={styles.buttonText}>
          LOGIN
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  registerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    top:-80,
    right:-120,
  },
  textInput: {
    width: '80%',
    height: 50,
    backgroundColor: "lightgray",
    marginBottom: 10,
top:-50
  },
  container: {
    backgroundColor: "yellow",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    top:-5
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: "red",
    justifyContent: 'center',
    alignItems: 'center',
    top:-50
  },
  image: {
    width: 400,
    height: 400,
    marginBottom: 10
  }
});

export default App;