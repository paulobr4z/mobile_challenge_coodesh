import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { BottomSheetInfo } from '../../components/BottomSheet';
import { Loading } from '../../components/Loading';
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
  const [page, setPage] = useState(1);

  async function onGetPatients() {
    setLoading(true);

    const { data } = await api.get(`?page=1&results=10&seed=abc`);

    setPatients(data.results);
    setLoading(false);
    setPage(prev => prev + 1);
  }

  useEffect(() => {
    onGetPatients();
  }, [])

  async function getNewPage() {
    if (page > 5) return;

    setLoading(true);

    const { data } = await api.get(`?page=${page}&results=10&seed=abc`);

    setPatients(prev => [...prev, ...data.results]);
    setLoading(false);
    setPage(prev => prev + 1);
  }


  function handleOpenBottomSheet(index: number) {
    setIsOpen(true);
    setPatientIndex(index);
  }
  
  function handleCloseBottomSheet() {
    setIsOpen(false)
  }

  function getPatientByGender() {
    const patientByGender = patients.filter(patient => patient.gender === 'female');

    setPatients(patientByGender);
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
      <PatientList
        patients={patients} 
        openBottomSheet={handleOpenBottomSheet}
        isLoading={loading}
        getMorePage={() => getNewPage()}
      />
      <BottomSheetInfo
        closeBottomSheet={() => handleCloseBottomSheet()}
        isOpen={isOpen}
        patient={patients[patientIndex]}
      />
    </Container>
  );
}