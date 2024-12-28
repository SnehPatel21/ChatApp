import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ImageCluster = ({ users = [], maxImages = 3 }) => {
  const displayUsers = users.slice(0, maxImages);
  
  const getPositionStyle = (index, total) => {
    if (total === 1) {
      return styles.singleImage;
    }
    
    switch (index) {
      case 0:
        return styles.topLeft;
      case 1:
        return styles.topRight;
      case 2:
        return styles.bottomLeft;
      default:
        return {};
    }
  };

  return (
    <View style={styles.container}>
      {displayUsers.map((user, index) => (
        <Image
          key={user.user_id}
          source={{ uri: user.image }}
          style={[
            styles.image,
            getPositionStyle(index, displayUsers.length)
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    position: 'relative',
  },
  image: {
    width: 32,
    height: 32,
    borderRadius: 16,
    position: 'absolute',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  singleImage: {
    top: 8,
    left: 8,
  },
  topLeft: {
    top: 0,
    left: 0,
  },
  topRight: {
    top: 0,
    right: 0,
  },
  bottomLeft: {
    bottom: 0,
    left: 8,
  },
});

export default ImageCluster;