import { Text, View, StyleSheet} from "react-native";
import { Link } from 'expo-router';

//add styles.container.backgroundColor property to change background color, replaced <Text> with "Home screen"
//Add a styles.text.color property to <Text> with the value of #fff (white) to change the text color.
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>hi, I’m Krhyginne! </Text>
      <Link href="/about" style={styles.button}>
        Go to About screen
      </Link>
    </View>
  );
}

//styles object to define custom styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'center',
  },
  text:{
    color:'#0A0E21',
    fontSize: 20,
  },
  button:{
    fontSize: 16,
    textDecorationLine: 'underline',
    color: '#0A0E21',
  },
});
