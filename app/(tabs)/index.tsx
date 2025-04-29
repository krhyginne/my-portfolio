import { Text, View, StyleSheet} from "react-native";
import { Link } from 'expo-router';

//add styles.container.backgroundColor property to change background color, replaced <Text> with "Home screen"
//Add a styles.text.color property to <Text> with the value of #fff (white) to change the text color.
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>hi, I’m Krhyginne! </Text>
      <Text style={styles.text}>a UX Designer committed to growth, driven with  </Text>
      <Text style={styles.text}>empathy & curiosity to create human-centered  </Text>
      <Text style={styles.text}>solutions. Currently @ Asian Connections Hub </Text>
      <Link href="/about" style={styles.button}>
        About Me
      </Link>
    </View>
  );
}

//styles object to define custom styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495441',
    alignItems:'center',
    justifyContent: 'center',
  },
  text:{
    color:'#fff',
    fontSize: 20,
  },
  button:{
    fontSize: 16,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
