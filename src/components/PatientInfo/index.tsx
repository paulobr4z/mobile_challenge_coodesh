import React from 'react';
import { StyleSheet } from 'react-native';
import { IPatients } from '../../types/patients';
import { formatDate } from '../../utils/formatDate';
import {
  CloseIcon,
  CloseButtonContainer,
  Container,
  PatientImage,
  PatientInfoContainer,
  PatientInfoTitle,
  PatientInfoText,
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
      <PatientImage source={{ uri: patient.picture.large }} />
      <PatientInfoContainer>

        <PatientInfoTitle>
          Full Name 
        </PatientInfoTitle>
        <PatientInfoText>
          {`${patient.name.first} ${patient.name.last}`}
        </PatientInfoText>

        <PatientInfoTitle>
          E-mail 
        </PatientInfoTitle>
        <PatientInfoText>
          {patient.email}
        </PatientInfoText>

        <PatientInfoTitle>
          Gender
        </PatientInfoTitle>
        <PatientInfoText>
          {patient.gender}
        </PatientInfoText>

        <PatientInfoTitle>
          Birth date
        </PatientInfoTitle>
        <PatientInfoText>
          {formatDate(patient.dob.date)}
        </PatientInfoText>

        <PatientInfoTitle>
          Phone
        </PatientInfoTitle>
        <PatientInfoText>
          {patient.phone}
        </PatientInfoText>

        <PatientInfoTitle>
          Nationality
        </PatientInfoTitle>
        <PatientInfoText>
          {patient.nat}
        </PatientInfoText>

        <PatientInfoTitle>
          Address
        </PatientInfoTitle>
        <PatientInfoText>
          {patient.location.street.name}
        </PatientInfoText>

        <PatientInfoTitle>
          ID
        </PatientInfoTitle>
        <PatientInfoText>
          {patient.login.uuid}
        </PatientInfoText>

      </PatientInfoContainer>
    </Container>
  );
}