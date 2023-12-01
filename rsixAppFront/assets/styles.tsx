import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: "#000",
  },
  container: {
    position: "relative",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000",
    alignItems: "center",
  },
  logo: {
    position: "absolute",
    width: 100,
    height: 100,
    top: 40,
  },
  logoOp: {
    position: "absolute",
    width: 100,
    height: 100,
    top: -10,
  },
  logoBtn: {
    position: "absolute",
    width: 100,
    height: 100,
    top: 0,
  },
  logoSpecific: {
    position: "absolute",
    width: 100,
    height: 100,
    top: -12,
  },
  btn: {
    color: "#fff",
    justifyContent: "center",
    paddingVertical: 30,
    margin: 20,
    paddingHorizontal: 30,
    borderRadius: 30,
    elevation: 3,
    width: 200,
    height: 100,
    backgroundColor: "#2b2a2a",
    alignSelf: "stretch",
    top: 50,
    position: "relative",
  },
  textColor: {
    color: "#fff",
    textAlign: "center",
    fontSize: 17,
    margin: 8,
  },
  textColorHeader: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    margin: 8,
  },
  textColorBold: {
    color: "#fff",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
    margin: 8,
  },
  textColorHeaderBold: {
    color: "#fff",
    textAlign: "center",
    fontSize: 21,
    fontWeight: "bold",
    margin: 8,
  },
  textColorHeaderBold2: {
    color: "#fff",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    margin: 8,
  },
  containerList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 110,
  },
  personalContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 100,
    width: 390,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#fff",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  itemText: {
    color: "#fff",
    flex: 1,
    fontSize: 17,
    marginLeft: 10,
  },
  itemContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#212020",
    borderRadius: 8,
  },
  rowContent: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    resizeMode: "contain",
  },
  imageOp: {
    width: 60,
    height: 60,
  },
  imageWeapon: {
    margin: 10,
    width: 280,
    height: 100,
    resizeMode: "contain",
  },
  imageAbility: {
    width: 150,
    height: 80,
    resizeMode: "contain",
  },
  searchInput: {
    height: 40,
    width: 152,
    top: 100,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    color: "#fff",
    margin: 10,
    padding: 10,
  },
  attachmentsContainer: {
    padding: 10,
    flex: 1,
  },
  attachmentsCategory: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 10,
  },
  attachmentsSubCategory: {
    fontSize: 16,
    fontWeight: "bold",
  },
  settingsIcon: {
    width: 50,
    height: 50,
  },
  settingsButton: {
    right: 150,
    bottom: 600,
  },
  settingsList: {
    top: 20,
  },
  settingsInput: {
    height: 40,
    width: 300,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    color: "#fff",
    margin: 10,
    textAlign: "center",
  },
  dropdownInput: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 4,
    color: "white",
    paddingRight: 30,
  },
  moreBtn: {
    borderRadius: 8,
    borderColor: "white",
    borderWidth: 2,
    textAlign: "center",
    marginBottom: 3,
    maxHeight: 43,
    flex: 1,
  },
  moveUp: {
    justifyContent: "center",
    bottom: 50,
  },
});
