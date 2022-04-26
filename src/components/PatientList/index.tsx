import React from 'react';
import { FlatList, Text } from 'react-native';
import { IPatients } from '../../types/patients';
import { formatDate } from '../../utils/formatDate';
import { Loading } from '../Loading';
import {
  Avatar,
  ItemPatientList,
  PatientInfo,
  Separator
} from './styles';

interface IPatientList {
  patients: IPatients[];
  openBottomSheet: (index: number) => void;
  isLoading: boolean;
  getMorePage: () => void
}

export function PatientList({
  patients,
  openBottomSheet,
  isLoading = false,
  getMorePage
}: IPatientList) {
  return (
    <FlatList
      data={patients}
      ItemSeparatorComponent={Separator}
      keyExtractor={ (_, index) => "key"+index }
      ListFooterComponent={<Loading isLoading={isLoading} loadingText={'Loading more...'} />}
      onEndReached={getMorePage}
      onEndReachedThreshold={0}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <ItemPatientList
            onPress={() => openBottomSheet(index)}
          >
            <Avatar source={{ uri: item?.picture?.large }} />
            <PatientInfo>
              <Text>{`${item?.name?.first} ${item?.name?.last}`}</Text>
              <Text>{item?.gender}</Text>
              <Text>{formatDate(item?.dob?.date)}</Text>
            </PatientInfo>
          </ItemPatientList>
        )
      }}
    />
  );
}