import React,{useState} from "react";
import { View, Text, StyleSheet,Button } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import DateTimePicker  from '@react-native-community/datetimepicker';

export default function Login() {

    const [date, setDate] = useState(new Date());

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
       /* DateTimePicker.open({
        value: date,
        onChange,
        mode: currentMode,
        is24Hour: true,
      });*/
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };
  
  return (
    <View style={styles.container}>
        <DateTimePicker
        display="default"
        timeZoneOffsetInMinutes={0}
        value={date}
        onChange
        mode={"datetime"}
        />
       <Button onPress={showDatepicker} title="Show date picker!" />
      <Button onPress={showTimepicker} title="Show time picker!" />
      <Text>selected: {date.toLocaleString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
