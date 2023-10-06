import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'
import BlogContext from "./context/blogContext";

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <FlatList
        keyExtractor={blog => blog.title}
        data={data}
        renderItem={({ item }) => (
          <Text>{item.title}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({})

export default IndexScreen;
