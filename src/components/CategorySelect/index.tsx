import React from 'react';
import { ScrollView } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';
import { categories } from '../../utils/categories';
import { Category } from '../Category';

type Prop = {
  CategorySelected: string;
  setCategory: (categoryId: string) => void;
  hasCheckBox?: boolean;
}

export function CategorySelect({CategorySelected, setCategory,   hasCheckBox = false} : Prop) {
  return (
    <ScrollView 
      horizontal 
      style={styles.container} 
      showsHorizontalScrollIndicator={false} 
      contentContainerStyle={{paddingRight: 40}} 
    >
      {
        categories.map(category => (
          <Category 
            key={category.id} 
            title={category.title} 
            icon={category.icon} 
            hasCheckBox={hasCheckBox}
            checked={category.id === CategorySelected} 
            onPress={() => setCategory(category.id)}
          />
        ))
      }
    </ScrollView>
  );
}