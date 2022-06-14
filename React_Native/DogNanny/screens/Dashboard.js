import { FlatList, StyleSheet, View } from "react-native";
import { Logo } from "../components/Logo";
import { Title } from "../components/Title";
import { PetList } from "../components/PetList";

export const Dashboard = () => {
  const data = [
    { name: "Goya", photo: require("../assets/7.jpg") },
    { name: "Buddy", photo: require("../assets/8.jpg") },
  ];
  return (
    <View style={styles.outerContainer}>
      <Logo />
      <Title>Your Pets</Title>
      <View style={styles.listContainer}>
        {data.map((item) => (
          <PetList
            key={item.name}
            name={item.name}
            photoUrl={item.photo}
          ></PetList>
        ))}

        {/* <FlatList
          data={data}
          renderItem={(itemData) => (
            <PetList
              name={itemData.item.name}
              photoUrl={itemData.item.photo}
              keyExtractor={(item) => item}
            ></PetList>
          )}
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    marginTop: 30,
    alignItems: "center",
    marginHorizontal: 16,
  },
  listContainer: {
    width: "100%",
  },
});
