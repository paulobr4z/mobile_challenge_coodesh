import React from 'react';
import { StyleSheet } from 'react-native';
import { IPatients } from '../../types/patients';
import {
  CloseIcon,
  CloseButtonContainer,
  Container,
  PatientImage,
  PatientImageContainer
} from './styles';

interface IPatientInfo {
  patient: IPatients
  closeBottomSheet: () => void;
}

export function PatientInfo({
  patient,
  closeBottomSheet
}: IPatientInfo) {
  return (
    <Container>
      <CloseButtonContainer
        onPress={closeBottomSheet}
      >
        <CloseIcon name="close" />
      </CloseButtonContainer>
      <PatientImageContainer>
        <PatientImage source={{ uri: patient.picture.large }} />
      </PatientImageContainer>
    </Container>
  );
}