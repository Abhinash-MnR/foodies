import * as React from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";

import { Card, Text } from "react-native-paper";

const Home = () => {
  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
        <Text style={styles.HeadingText}>Explore Recipes</Text>
        <Image
          style={styles.ImageStyle}
          source={require("../assets/add-btn.svg")}
        />
        <Card>
          <View style={{ position: "relative" }}>
            <Card.Cover
              style={{
                height: 194,
                filter: "brightness(0.5)",
                background: `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5))})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                //  linear-gradient(190deg, #fa7c30 30%, rgba(0, 0, 0, 0)30%), url(${`https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`});
              }}
              source={{
                uri: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              }}
            />
            <View
              style={{
                position: "absolute",
                bottom: 6,
                left: 0,
                marginLeft: 12,
                paddingRight: 12,
              }}
            >
              <Text style={styles.TextTitle}>Weekly Pic</Text>
              <Text style={styles.TextsubTitle}>
                This Italian pasta and steak will warm up the faintest of
                hearts.
              </Text>
            </View>
          </View>
        </Card>

        <View style={styles.RecentContainer}>
          <Text style={styles.recentText}>Recent Receipe</Text>
          <Text style={styles.viewAllText}>View all</Text>
        </View>

        <View style={styles.RecentCard}>
          <Card style={{ width: "50%", marginRight: 7 }}>
            <Image
              style={{ width: "inherit", height: 140, borderRadius: 12 }}
              source={{
                uri: "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              }}
            />
          </Card>
          <Card style={{ width: "50%", marginLeft: 7 }}>
            <Image
              style={{ width: "inherit", height: 140, borderRadius: 12 }}
              source={{
                uri: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              }}
            />
            {/* <Card.Cover source={{ uri: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",height:"inherit"}} /> */}
          </Card>
        </View>

        <View style={styles.RecentContainer}>
          <Text style={styles.recentText}>Recommended</Text>
          <Text style={styles.viewAllText}>View all</Text>
        </View>

        <View style={styles.RecentCard}>
          <Card style={{ width: "50%", marginRight: 7 }}>
            <Image
              style={{ width: "inherit", height: 140, borderRadius: 12 }}
              source={{
                uri: "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              }}
            />
          </Card>
          <Card style={{ width: "50%", marginLeft: 7 }}>
            <Image
              style={{ width: "inherit", height: 140, borderRadius: 12 }}
              source={{
                uri: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              }}
            />
            {/* <Card.Cover source={{ uri: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",height:"inherit"}} /> */}
          </Card>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  HeadingText: {
    fontFamily: "cabin",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: 32,
    color: "#001E00",
    marginBottom: 20,
  },
  ImageStyle: {
    position: "relative",
  },
  TextTitle: {
    color: "#FFF",

    fontFamily: "Cabin",
    fontSize: 23,
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: 32,
    letterSpacing: -0.23,
  },

  TextsubTitle: {
    color: "#C9CDC9",

    fontFamily: " Montserrat",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: 19,
  },

  TextContent: {
    marginTop: 12,
    fontFamily: "Montserrat",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: 24,
  },
  RecentContainer: {
    //  flex: 1,
    justifyContent: "space-between",
    marginTop: 14,
    flexDirection: "row",
    marginBottom: 14,
    alignItems: "center",
  },
  recentText: {
    fontFamily: "Cabin",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: 32,
    color: "#001E00",
  },

  viewAllText: {
    fontFamily: "Montserrat",

    fontSize: 14,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: 21,
    color: "#6AA920",
  },

  RecentCard: {
    height: 140,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
});
