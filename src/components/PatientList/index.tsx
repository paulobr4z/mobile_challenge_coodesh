import React, { useState } from 'react';
import { FlatList, Text } from 'react-native';
import { IPatients } from '../../types/patients';
import { formatDate } from '../../utils/formatDate';
import {
  Avatar,
  ItemPatientList,
  PatientInfo
} from './styles';

interface IPatientList {
  patients: IPatients[];
  openBottomSheet: (index: number) => void;
}

export function PatientList({
  patients,
  openBottomSheet,
}: IPatientList) {
  return (
    <FlatList
      data={patients}
      keyExtractor={ item => item.login.uuid }
      renderItem={({ item, index }) => (
        <ItemPatientList
          onPress={() => openBottomSheet(index)}
        >
          <Avatar source={{ uri: item.picture.large }} />
          <PatientInfo>
            <Text>{`${item.name.first} ${item.name.last}`}</Text>
            <Text>{item.gender}</Text>
            <Text>{formatDate(item.dob.date)}</Text>
          </PatientInfo>
        </ItemPatientList>
      )}
    />
  );
}