import React, { useContext, useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Context as BlogContext } from "./context/blogContext";

const ShowScreen = ({ route }) => {
  const id = route.params.id;

  const { state } = useContext(BlogContext);

  const selectedPost = useMemo(() => (
    state.find(post => post.id === id)
  ), [id]);

  return (
    <View>
      <Text>{selectedPost.title}</Text>

      <Text>{selectedPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({})

export default ShowScreen;
