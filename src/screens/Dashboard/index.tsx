import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { BottomSheetInfo } from '../../components/BottomSheet';
import { PatientList } from '../../components/PatientList';
import api from '../../services/api';
import { IPatients } from '../../types/patients';

import {
  Title,
  Container,
  Header,
  SearchFilterContainer,
  Search,
  FilterIcon,
  FilterButton,
} from './styles';

export function Dashboard() {
  const [patients, setPatients] = useState<IPatients[]>([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [patientIndex, setPatientIndex] = useState(0);
  const [gender, setGender] = useState('female');

  useEffect(() => {
    setLoading(true);

    async function onGetPatients() {
      const response = await api.get('?page=0&results=20&seed=patients');

      setPatients(response.data.results);
      setLoading(false);
    }

    onGetPatients();      

  }, [])

  function handleOpenBottomSheet(index: number) {
    setIsOpen(true);
    setPatientIndex(index);
  }
  
  function handleCloseBottomSheet() {
    setIsOpen(false)
  }

  function getPatientByGender() {
    const patientByGender = patients.filter(patient => patient.gender === gender);
    
    setPatients(patientByGender)
    setGender(gender === 'male' ? 'female' : 'male')
  }

  return (
    <Container>
      <Header>
        <Title>Dashboard</Title>
      </Header>
      <SearchFilterContainer>
        <Search placeholder='teste' />
        <FilterButton onPress={getPatientByGender}>
          <FilterIcon name="filter" />
        </FilterButton>
      </SearchFilterContainer>
      {
        loading ? (
          <Text>loading...</Text>
        ) : (
          <PatientList
            patients={patients} 
            openBottomSheet={handleOpenBottomSheet}
          />
        )
      }
      <BottomSheetInfo
        closeBottomSheet={() => handleCloseBottomSheet()}
        isOpen={isOpen}
        patient={patients[patientIndex]}
      />
    </Container>
  );
}