import { useState } from "react";
import { Button, Modal, StyleSheet, View } from "react-native";
import ReactNativeModal from "react-native-modal";

function Model() {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Button title="open modal" onPress={() => setVisible(true)} />
      {/* <Modal visible={visible} animationType="slide" transparent>
        <View style={{ 
          backgroundColor: "blue", 
          height: 300,
          position: 'absolute',
          bottom: 0,
          width: 420
        }}>
          <Button title="close model" onPress={() => setVisible(false)} />
        </View>
      </Modal> */}
      <ReactNativeModal
        isVisible={visible}
        onBackdropPress={() => setVisible(false)}
        onBackButtonPress={() => setVisible(false)}
        animationIn={"slideInUp"}
        animationOut={"slideOutDown"}
        style={{ justifyContent: "flex-end", margin: 0 }}
      >
        <View style={{ backgroundColor: "white", height: 200 }}>
          <Button title="Close modal" onPress={() => setVisible(false)} />
        </View>
      </ReactNativeModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Model;
