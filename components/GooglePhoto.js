import React from "react";
import { TouchableOpacity, Image } from "react-native";

class GooglePhoto extends React.Component {
  constructor(props) {
    super(props);
    this.selectPhoto = this.selectPhoto.bind(this)
    this.state = {
      selected: null,
      borderColor: "#000000",
      borderWidth: 0
    };
  }
  
  selectPhoto() {
    if (this.state.selected) {
      this.setState({ selected: false, borderColor: "#000000", borderWidth: 0});
      this.props.updateHeader("remove");
      this.props.removePhotoFromDB(this.props.photoId);
    } else {
      this.setState({ selected: true, borderColor: "#008000", borderWidth: 5 });
      this.props.updateHeader("append");
      this.props.addPhotoToDB(this.props.photoId, this.props.photoUrl, this.props.uri);
    }
  }

  render() {
    let w = 125;
    let h = 125;

    if (this.props.small) {
      w = 80;
      h = 80;
    }

    return (
      <TouchableOpacity
        onPress={() => {
          this.selectPhoto();
        }}
        style={{ width: "33%", marginTop: 6 }}
      >
        <Image
          style={{
            width: w,
            height: h,
            alignSelf: "center",
            borderWidth: this.state.borderWidth,
            borderRadius: 2,
            borderColor: this.state.borderColor
          }}
          source={{
            uri: this.props.uri
          }}
        />
      </TouchableOpacity>
    );
  }
}

export default GooglePhoto;