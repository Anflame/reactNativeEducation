import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import { View, FlatList, Text } from 'react-native';
import type { TListItem } from '../../comon-types';
import { ListItem } from '../ListItem/ListItem';
import { styles } from './styles';

type ListProps = {
  list: TListItem[];
  deleteHandler: (id: string) => void;
};

export const List: FC<ListProps> = ({ list, deleteHandler }) => (
  <View>
    <FlatList style={styles.list} data={list} renderItem={({ item: { done, id, title } }) => <ListItem done={done} id={id} title={title} deleteHandler={deleteHandler} />} />
  </View>
);
