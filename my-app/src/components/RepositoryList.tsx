import { View, Text, FlatList } from "react-native";
import repos from "../data/repos";
import RepositoryItem from "./RepositoryItem";

const RepositoryList = () => {
  return (
    <FlatList
      data={repos}
      ItemSeparatorComponent={() => <Text></Text>}
      renderItem={({ item: repo }) => <RepositoryItem repo={repo} />}
    ></FlatList>
  );
};

export default RepositoryList;
