import AvatarGenerator from "react-native-avatar-generator";
import { View } from "react-native";

const AvatarIcon = ({ size, text }) => (
  <View style={{ marginRight: 5 }}>
    <AvatarGenerator
      backgroundColor="black"
      text={text}
      size={size}
      fontColor="#FFFFF"
    />
  </View>
);

export default AvatarIcon;
