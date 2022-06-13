import { FlatList, StyleSheet, Text, View } from "react-native";
import { Card } from "../components/Card";
import { Logo } from "../components/Logo";
import { Title } from "../components/Title";

export const Dashboard = () => {
  const data = [
    { name: "Goya", photo: require("../assets/7.jpg") },
    { name: "Buddy", photo: require("../assets/8.jpg") },
  ];
  return (
    <View style={styles.outerContainer}>
      <Logo />
      <Title>Your Pets</Title>
      {data.map((item) => (
        <Card key={item.name} name={item.name} photoUrl={item.photo}></Card>
      ))}
      {/* <FlatList
        data={data}
        renderItem={(itemData) => (
          <Card
            name={itemData.item.name}
            photoUrl={itemData.item.photo}
            keyExtractor={(item) => item}
          ></Card>
        )}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    marginTop: 30,
    alignItems: "center",
    marginHorizontal: 16,
  },
});
