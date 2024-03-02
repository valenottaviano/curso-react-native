import { View, Text, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import theme from "../theme";

const RepositoryItem = ({ repo }: any) => {
  return (
    <View style={styles.container}>
      <StyledText fontWeight="bold" fontSize="subheading">
        {repo.fullName}
      </StyledText>
      <StyledText color="secondary">{repo.description}</StyledText>
      <StyledText style={styles.language}>{repo.language}</StyledText>
    </View>
  );
};

export default RepositoryItem;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 5,
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    marginVertical: 4,
    borderRadius: 4,
    overflow: "hidden",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});
