import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find(post => post.id === id);
  return (
    <View>
      <BlogPostForm
        onSubmit={(title, content) => {
          editBlogPost(id, title, content, () => {
            navigation.pop();
          });
        }}
        labels={{ first: 'Enter New Title', second: 'Enter New Content' }}
        initialValues={{ title: blogPost.title, content: blogPost.content }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});

export default EditScreen;
