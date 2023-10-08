import React, { useContext, useMemo, useCallback } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native'
import { Context as BlogContext } from "./context/blogContext";
import { useNavigation } from "@react-navigation/native";
import BlogPostForm from "./components/BlogPostForm";

const EditScreen = ({ route }) => {
  const id = route.params.id;

  const { state, editPost } = useContext(BlogContext);
  const navigation = useNavigation();

  const selectedPost = useMemo(() => (
    state.find(post => post.id === id)
  ), [id]);

  const editSelectedPost = useCallback((title, content) => {
    const editedPost = {
      id,
      title,
      content,
    };

    editPost(editedPost, () => navigation.goBack());
  }, []);

  return (
    <BlogPostForm
      initialValues={{
        title: selectedPost.title,
        content: selectedPost.content,
      }}
      onSubmit={editSelectedPost}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },

  label: {
    fontSize: 20,
    margin: 5,
  }
})

export default EditScreen;
