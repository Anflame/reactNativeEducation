import React, { FC } from 'react';
import { View, Button, TextInput, GestureResponderEvent } from 'react-native';
import { Formik } from 'formik';
import { styles } from './styles';

export const Form: FC = () => {
 return (
   <View>
     <Formik onSubmit={(values, action) => { console.log(values); action.resetForm()}} initialValues={{ name: '', anons: '', full: '', img: '' }}>
       {({ handleChange, handleSubmit, values: {name, anons, full, img}}) => (
         <View>
           <TextInput value={ name } placeholder='Введите название' onChangeText={handleChange('name')}/>
           <TextInput value={ anons } multiline placeholder='Введите Анонс' onChangeText={handleChange('anons')}/>
           <TextInput value={ full } multiline placeholder='Введите Статью' onChangeText={handleChange('full')}/>
           <TextInput value={ img } placeholder='Укажите Фото' onChangeText={handleChange('img')} />
           <Button onPress={(handleSubmit as unknown) as (event: GestureResponderEvent) => void} title='Добавить' />
         </View>
       )}
     </Formik>
   </View>
 );
}
