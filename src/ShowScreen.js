import React, { useContext, useMemo, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Context as BlogContext } from "./context/blogContext";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

const ShowScreen = ({ route }) => {
  const id = route.params.id;
  const { state } = useContext(BlogContext);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Edit', { id })}>
          <FontAwesome name="pencil" size={30} style={styles.pencilIcon} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const selectedPost = useMemo(() => (
    state.find(post => post.id === id)
  ), [state, id]);

  return (
    <View>
      <Text>{selectedPost.title}</Text>
      <Text>{selectedPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pencilIcon: {
    marginRight: 20,
  }
})

export default ShowScreen;
