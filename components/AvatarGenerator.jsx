import AvatarGenerator from "react-native-avatar-generator";
import { View } from "react-native";

const AvatarIcon = () => (
  <View style={{ alignItems: "center", marginRight: 10 }}>
    <AvatarGenerator
      backgroundColor="red"
      text="G"
      size={30}
      fontColor="#FFFFF"
    />
  </View>
);

export default AvatarIcon;
