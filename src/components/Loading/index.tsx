import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

interface ILoading {
  loadingText?: string;
  loadingColor?: string;
  loadingSize?: 'small' | 'large';
  isLoading?: boolean;
}

export function Loading({
  loadingText = '',
  loadingColor = '#ccc',
  loadingSize = 'small',
  isLoading = false,
}: ILoading) {
  if (isLoading) {
    return (
      <View style={{ width: '100%', height: 50, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
        <Text style={{ marginRight: 8 }} >{loadingText}</Text>
        <ActivityIndicator size={loadingSize} color={loadingColor} />
      </View>
    )    
  }
  return null
}