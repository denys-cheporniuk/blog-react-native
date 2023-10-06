import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { Context as BlogContext } from "./context/blogContext";

const IndexScreen = () => {
  const { state, addPost } = useContext(BlogContext);

  return (
    <View>
      <FlatList
        keyExtractor={blog => blog.title}
        data={state}
        renderItem={({ item }) => (
          <Text>{item.title}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({})

export default IndexScreen;
