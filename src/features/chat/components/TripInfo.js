import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ImageCluster = ({ messages = [] }) => {
  const uniqueUsers = [...new Map(
    messages.map(message => [message.sender.user_id, message.sender])
  ).values()];

  const displayUsers = uniqueUsers.slice(0, 3);
  const remainingCount = uniqueUsers.length - 3;

  return (
    <View style={styles.clusterContainer}>
      {displayUsers[0] && (
        <Image
          source={{ uri: displayUsers[0].image }}
          style={[styles.profileImage, styles.topImage]}
        />
      )}
      <View style={styles.bottomRow}>
        {displayUsers[1] && (
          <Image
            source={{ uri: displayUsers[1].image }}
            style={[styles.profileImage, styles.bottomLeftImage]}
          />
        )}
        {displayUsers[2] && (
          <Image
            source={{ uri: displayUsers[2].image }}
            style={[styles.profileImage, styles.bottomRightImage]}
          />
        )}
      </View>
      {remainingCount > 0 && (
        <View style={styles.countBadge}>
          <Text style={styles.countText}>+{remainingCount}</Text>
        </View>
      )}
    </View>
  );
};

const TripInfo = ({ from, to, chatData }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ImageCluster messages={chatData?.chats || []} />
        <View style={styles.locationInfo}>
          <View style={styles.locationRow}>
            <Text style={styles.label}>From</Text>
            <Text style={styles.place}>{from}</Text>
          </View>
          <View style={styles.locationRow}>
            <Text style={styles.label}>To</Text>
            <Text style={styles.place}>{to}</Text>
          </View>
        </View>
        <TouchableOpacity 
          style={styles.menuButton}
          onPress={() => setShowMenu(true)}
        >
          <Feather name="more-vertical" size={20} color="black" />
        </TouchableOpacity>
      </View>

      <Modal
        visible={showMenu}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowMenu(false)}
      >
        <TouchableOpacity 
          style={styles.modalOverlay}
          onPress={() => setShowMenu(false)}
        >
          <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.menuItem}>
              <Feather name="users" size={20} color="black" />
              <Text style={styles.menuText}>Members</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Feather name="phone" size={20} color="black" />
              <Text style={styles.menuText}>Share Number</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Feather name="flag" size={20} color="black" />
              <Text style={styles.menuText}>Report</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAF9F4',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
      },
      content: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      clusterContainer: {
        width: 48,
        height: 48,
        marginRight: 12,
        position: 'relative',
      },
      profileImage: {
        width: 32,
        height: 32,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: '#FAF9F4',
      },
      topImage: {
        position: 'absolute',
        top: 0,
        left: 8,
        zIndex: 3,
      },
      bottomRow: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        zIndex: 2,
      },
      bottomLeftImage: {
        marginRight: -8,
      },
      bottomRightImage: {
        marginLeft: -8,
      },
      countBadge: {
        position: 'absolute',
        bottom: -8,
        right: -8,
        backgroundColor: '#E0E0E0',
        borderRadius: 12,
        paddingHorizontal: 6,
        paddingVertical: 2,
      },
      countText: {
        fontSize: 12,
        color: '#666666',
      },
      locationInfo: {
        flex: 1,
      },
      locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
      },
      label: {
        fontSize: 16,
        color: '#666666',
        marginRight: 4,
      },
      place: {
        fontSize: 16,
        fontWeight: '500',
      },
      menuButton: {
        padding: 4,
      },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menuContainer: {
    position: 'absolute',
    top: 60,
    right: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  menuText: {
    marginLeft: 12,
    fontSize: 16,
  },
});

export default TripInfo;