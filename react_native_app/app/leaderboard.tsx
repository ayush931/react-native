import { FlatList, Image, StyleSheet, Text, View } from "react-native";

function Leaderboard() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.headerTitle}>Leader Board</Text>
        <View style={styles.mainCardContainer}>
          {[3, 1, 2].map((item, index) => {
            return (
              <View key={index} style={[styles.mainCard, item !== 1 && { marginTop: 20 }]}>
                <Image
                  source={{
                    uri: "https://img.freepik.com/premium-photo/business-technology-people-concept-smiling-businessman-working-with-internet-search-bar_380164-126357.jpg?semt=ais_hybrid",
                  }}
                  style={styles.mainCardImage}
                  resizeMode="cover"
                />
                <Text style={styles.mainCardTitle}>Ayush</Text>
                <View style={styles.mainCardRankContainer}>
                  <Text style={styles.mainCardRankContainerText}>{item}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5, 4, 3, 2, 3, 4, 5, 6, 7, 8, 9, 0, 3, 4, 5, 6, 7, 8, 9]}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.card}>
              <View style={styles.cardDataContainer}>
                <Text style={styles.cardIndex}>{index + 1}</Text>
                <Image
                  source={{
                    uri: "https://img.freepik.com/premium-photo/business-technology-people-concept-smiling-businessman-working-with-internet-search-bar_380164-126357.jpg?semt=ais_hybrid",
                  }}
                  style={styles.cardImage}
                  resizeMode="cover"
                />
                <Text style={styles.cardTitle}>Ayush Kumar</Text>
              </View>
              <View style={styles.cardRankContainer}>
                <Text style={styles.cardRankTitle}>1234</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272c35",
  },
  topContainer: {
    backgroundColor: "#1a1f25",
    paddingTop: 30,
    padding: 20,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    gap: 20,
    paddingBottom: 50,
  },
  headerTitle: {
    textAlign: "center",
    color: "white",
    fontSize: 21,
    fontWeight: "bold",
  },
  mainCardContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
  mainCard: {
    backgroundColor: "#272c35",
    padding: 20,
    alignItems: "center",
    borderRadius: 20,
    gap: 15,
    height: 170,
  },
  mainCardImage: {
    height: 90,
    width: 70,
    borderRadius: 20,
  },
  mainCardTitle: {
    color: "white",
    fontSize: 17,
    fontWeight: 600,
  },
  mainCardRankContainer: {
    backgroundColor: "orange",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    position: "absolute",
    bottom: -20,
  },
  mainCardRankContainerText: {
    color: "white",
  },
  card: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardDataContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  cardIndex: {
    color: "white",
  },
  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 15,
  },
  cardTitle: {
    color: "white",
    fontSize: 17,
  },
  cardRankContainer: {},
  cardRankTitle: {
    color: "orange",
  },
});

export default Leaderboard;
