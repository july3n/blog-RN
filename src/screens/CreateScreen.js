import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  return (
    <View>
      <BlogPostForm
        onSubmit={(title, content) =>
          addBlogPost(title, content, () => {
            navigation.navigate('Index');
          })
        }
        labels={{ first: 'Enter Title', second: 'Enter Content' }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});

export default CreateScreen;
