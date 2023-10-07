import React, { useCallback, useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Context as BlogContext } from "./context/blogContext";

const CreateScreen = () => {
  const { addPost } = useContext(BlogContext);
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');

  const addNewPost = useCallback(() => {

    addPost({
      title: postTitle,
      content: postContent,
    });

    setPostTitle('');
    setPostContent('');

  }, [postTitle, postContent])

  return (
    <View>
      <View>
        <Text
          style={styles.label}
        >
          Enter Title
        </Text>

        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoCapitalize="none"
          value={postTitle}
          onChangeText={setPostTitle}
        />
      </View>

      <View>
        <Text
          style={styles.label}
        >
          Enter Content
        </Text>

        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoCapitalize="none"
          value={postContent}
          onChangeText={setPostContent}
        />
      </View>

      <Button
        title="Save"
        onPress={addNewPost}
      />
    </View>
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

export default CreateScreen;
