import { TextInput} from "react-native";
import { styles } from "./SearchBar.style";

export function SearchBar({ onSubmit }) {
  return (
    <TextInput
      onSubmitEditing={(e)=> onSubmit(e.nativeEvent.text)}
      style={styles.input}
      placeholder="Search a city"
      clearTextOnFocus
    />
  );
}
