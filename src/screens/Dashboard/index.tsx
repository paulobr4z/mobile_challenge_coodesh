import React, { useContext, useEffect, useState } from 'react';
import { Text } from 'react-native';
import { BottomSheetInfo } from '../../components/BottomSheet';
import { PatientList } from '../../components/PatientList';
import { PatientsContext } from '../../contexts/PatientsContext';

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
  const { patients, loading } = useContext(PatientsContext);
  const [isOpen, setIsOpen] = useState(false);
  const [patientIndex, setPatientIndex] = useState(0);

  function handleOpenBottomSheet(index: number) {
    setIsOpen(true);
    setPatientIndex(index);
  }
  
  function handleCloseBottomSheet() {
    setIsOpen(false)
  }

  return (
    <Container>
      <Header>
        <Title>Dashboard</Title>
      </Header>
      <SearchFilterContainer>
        <Search placeholder='teste' />
        <FilterButton>
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