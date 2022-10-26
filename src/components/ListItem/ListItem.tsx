import React, { FC } from 'react';
import { Text, TouchableHighlight } from 'react-native';
import type { TListItem } from '../../comon-types';
import { styles } from './styles';

type ListItemProps = {
  deleteHandler: (id: string) => void;
};

export const ListItem: FC<TListItem & ListItemProps> = ({ done, id, title, deleteHandler }) => {
 return (
   <TouchableHighlight key={id} onPress={() => deleteHandler(id)}>
     <Text style={styles.listes}>{title}</Text>
   </TouchableHighlight>
 );
}
