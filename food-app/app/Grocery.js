import React from "react";
import { Image, StyleSheet, View, Text, ScrollView } from "react-native";
import { Searchbar } from "react-native-paper";
function Grocery() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <ScrollView>
      <View style={{ flex: 1, padding: 20 }}>
        <View style={{ marginBottom: 20 }}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>

        <View style={styles.Mainontainer}>
          <View>
            <Image
              source={{
                uri: "https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              }}
              style={{
                width: 90,
                height: 80,
                borderTopLeftRadius: 12,
                borderBottomLeftRadius: 12,
              }}
            />
          </View>
          <View style={styles.textContainer}>
            <View>
              <Text style={styles.textStyle}>Yan name</Text>
              <Text style={styles.textSub}>6/12 ingredient</Text>
            </View>
          </View>
        </View>

        <View style={styles.Mainontainer}>
          <View>
            <Image
              source={{
                uri: "https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              }}
              style={{
                width: 90,
                height: 80,
                borderTopLeftRadius: 12,
                borderBottomLeftRadius: 12,
              }}
            />
          </View>
          <View style={styles.textContainer}>
            <View>
              <Text style={styles.textStyle}>Yan name</Text>
              <Text style={styles.textSub}>6/12 ingredient</Text>
            </View>
          </View>
        </View>

        <View style={styles.Mainontainer}>
          <View>
            <Image
              source={{
                uri: "https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              }}
              style={{
                width: 90,
                height: 80,
                borderTopLeftRadius: 12,
                borderBottomLeftRadius: 12,
              }}
            />
          </View>
          <View style={styles.textContainer}>
            <View>
              <Text style={styles.textStyle}>Yan name</Text>
              <Text style={styles.textSub}>6/12 ingredient</Text>
            </View>
          </View>
        </View>

        <View style={styles.Mainontainer}>
          <View>
            <Image
              source={{
                uri: "https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              }}
              style={{
                width: 90,
                height: 80,
                borderTopLeftRadius: 12,
                borderBottomLeftRadius: 12,
              }}
            />
          </View>
          <View style={styles.textContainer}>
            <View>
              <Text style={styles.textStyle}>Yan name</Text>
              <Text style={styles.textSub}>6/12 ingredient</Text>
            </View>
          </View>
        </View>

        <View style={styles.Mainontainer}>
          <View>
            <Image
              source={{
                uri: "https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              }}
              style={{
                width: 90,
                height: 80,
                borderTopLeftRadius: 12,
                borderBottomLeftRadius: 12,
              }}
            />
          </View>
          <View style={styles.textContainer}>
            <View>
              <Text style={styles.textStyle}>Yan name</Text>
              <Text style={styles.textSub}>6/12 ingredient</Text>
            </View>
          </View>
        </View>

        <View style={styles.Mainontainer}>
          <View>
            <Image
              source={{
                uri: "https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              }}
              style={{
                width: 90,
                height: 80,
                borderTopLeftRadius: 12,
                borderBottomLeftRadius: 12,
              }}
            />
          </View>
          <View style={styles.textContainer}>
            <View>
              <Text style={styles.textStyle}>Yan name</Text>
              <Text style={styles.textSub}>6/12 ingredient</Text>
            </View>
          </View>
        </View>

        <View style={styles.Mainontainer}>
          <View>
            <Image
              source={{
                uri: "https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              }}
              style={{
                width: 90,
                height: 80,
                borderTopLeftRadius: 12,
                borderBottomLeftRadius: 12,
              }}
            />
          </View>
          <View style={styles.textContainer}>
            <View>
              <Text style={styles.textStyle}>Yan name</Text>
              <Text style={styles.textSub}>6/12 ingredient</Text>
            </View>
          </View>
        </View>

        <View style={styles.Mainontainer}>
          <View>
            <Image
              source={{
                uri: "https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              }}
              style={{
                width: 90,
                height: 80,
                borderTopLeftRadius: 12,
                borderBottomLeftRadius: 12,
              }}
            />
          </View>
          <View style={styles.textContainer}>
            <View>
              <Text style={styles.textStyle}>Yan name</Text>
              <Text style={styles.textSub}>6/12 ingredient</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Mainontainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    marginBottom: 14,
    background: "#FFF",
    boxShadow: "0px 6px 12px 0px rgba(0, 0, 0, 0.05)",
  },
  textContainer: {
    width: "70%",
    paddingLeft: 11,
  },
  textStyle: {
    color: "#001E00",
    fontFamily: "Cabin",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: 32,
  },

  textSub: {
    color: "#001E00",
    fontFamily: "Montserrat",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: 18,
  },
});

export default Grocery;
