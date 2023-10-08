import React, { useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native'
import { Context as BlogContext } from "./context/blogContext";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const IndexScreen = () => {
  const { state, getPosts, deletePost } = useContext(BlogContext);

  const navigation = useNavigation();

  useEffect(() => {
    getPosts()

    const listener = navigation.addListener('didFocus', () => getPosts());

    return listener;
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <Feather name="plus" size={30} style={styles.iconAdd} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <FlatList
        keyExtractor={blog => blog.id}
        data={state}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
            <View style={styles.post}>
              <Text style={styles.title}>{item.title}</Text>

              <TouchableOpacity onPress={() => deletePost(item.id)}>
                <Feather style={styles.iconTrash} name="trash" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },

  title: {
    fontSize: 18,
  },

  iconTrash: {
    fontSize: 24,
    padding: 5,
  },

  iconAdd: {
    marginRight: 20,
  }
})

export default IndexScreen;
