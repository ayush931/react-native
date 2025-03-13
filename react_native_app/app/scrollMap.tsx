import { FlatList, ScrollView, Text, View } from "react-native";

function ScrollMap() {
  return (
    <View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 4, 3, 4, 5, 4, 2, 4, 5, 2, 3, 3, 4 ,2, 3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 4, 3, 4, 5, 4, 2, 4, 5, 2, 3, 3, 4 ,2, 3]}
        // horizontal
        contentContainerStyle={{ marginTop: 40, padding: 20 }}
        numColumns={3}
        ListHeaderComponent={<View style={{width: '100%', height: 200, backgroundColor: "green"}}></View>}
        ListFooterComponent={<View style={{width: '100%', height: 200, backgroundColor: "yellow"}}></View>}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: "green",
                marginBottom: 20,
                marginRight: 20,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 100
              }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'white' }}>{item}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

export default ScrollMap;
