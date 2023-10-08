import React, { useCallback, useContext } from 'react';
import { StyleSheet } from 'react-native'
import { Context as BlogContext } from "./context/blogContext";
import { useNavigation } from "@react-navigation/native";
import BlogPostForm from "./components/BlogPostForm";

const CreateScreen = () => {
  const navigation = useNavigation();
  const { addPost } = useContext(BlogContext);

  const addNewPost = useCallback((title, content) => {
    const newPost = {
      title,
      content,
    };

    addPost(newPost, () => navigation.navigate('Index'));
  }, [])

  return (
    <BlogPostForm
      onSubmit={addNewPost}
    />
  )
};

const styles = StyleSheet.create({

})

export default CreateScreen;
