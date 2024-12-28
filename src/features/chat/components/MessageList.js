import React, { useCallback } from 'react';
import { View, FlatList, ActivityIndicator, Platform, StyleSheet } from 'react-native';
import Message from './Message';
import DateSeparator from './DateSeparator';

const LoadingIndicator = () => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size="small" color="#1C63D5" />
  </View>
);

const MessageList = ({ messages = [], onLoadMore, isLoading }) => {
  const handleScroll = useCallback(({ nativeEvent }) => {
    const { contentOffset, contentSize, layoutMeasurement } = nativeEvent;
    
    const scrollPosition = contentOffset.y;
    const threshold = Platform.select({
      ios: 0.8,
      android: 0.7,
    });

    const shouldLoadMore = scrollPosition > (contentSize.height - layoutMeasurement.height) * threshold;

    if (shouldLoadMore && !isLoading) {
      onLoadMore();
    }
  }, [isLoading, onLoadMore]);

  const renderItem = useCallback(({ item, index }) => {
    const messageDate = new Date(item.time).toDateString();
    const nextMessageDate = index < messages.length - 1 
      ? new Date(messages[index + 1].time).toDateString()
      : null;

    return (
      <View>
        {(index === messages.length - 1 || messageDate !== nextMessageDate) && (
          <DateSeparator date={item.time} />
        )}
        <Message message={item} />
      </View>
    );
  }, [messages]);

  return (
    <FlatList
      style={styles.container}
      data={messages}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      onScroll={handleScroll}
      scrollEventThrottle={Platform.select({
        ios: 16,
        android: 16,
      })}
      inverted={true}
      maxToRenderPerBatch={Platform.select({
        ios: 10,
        android: 5,
      })}
      windowSize={Platform.select({
        ios: 5,
        android: 3,
      })}
      removeClippedSubviews={Platform.OS === 'android'}
      initialNumToRender={10}
      updateCellsBatchingPeriod={Platform.select({
        ios: 50,
        android: 100,
      })}
      onEndReachedThreshold={0.5}
      maintainVisibleContentPosition={{
        minIndexForVisible: 0,
        autoscrollToTopThreshold: 10,
      }}
      ListFooterComponent={isLoading ? LoadingIndicator : null}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F4',
  },
  contentContainer: {
    padding: 16,
  },
  loadingContainer: {
    padding: Platform.select({
      ios: 10,
      android: 16,
    }),
    alignItems: 'center',
  },
});

export default React.memo(MessageList);