import React, {useCallback, useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const BlogPostForm = ({ initialValues, onSubmit }) => {
  const [postTitle, setPostTitle] = useState(initialValues.title);
  const [postContent, setPostContent] = useState(initialValues.content);

  const submit = useCallback(() => {
    onSubmit(postTitle, postContent);

    setPostTitle('')
    setPostContent('');
  }, [])

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
        onPress={submit}
      />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  }
}

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

export default BlogPostForm;
