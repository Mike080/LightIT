import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import Button from './Button';

const validationSchema = yup.object().shape({
  username: yup.string().label('Username').required(),
  password: yup
    .string()
    .trim()
    .label('Password')
    .min(6, 'Seems a bit short...')
    .required('Password is required'),
});

export default function Form() {
  return (
    <View>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values, actions) => {
          actions.resetForm();
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Enter username"
              onChangeText={props.handleChange('username')}
              value={props.values.username}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter password"
              onChangeText={props.handleChange('password')}
              value={props.values.password}
              secureTextEntry={true}
            />
            <Text style={{ color: 'red' }}>{props.errors.username}</Text>
            <Text style={{ color: 'red' }}>{props.errors.password}</Text>
            <Button text="submit" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    marginVertical: 10,
  },
});
