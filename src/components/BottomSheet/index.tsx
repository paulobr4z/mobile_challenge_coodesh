import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { ContentContainer } from './styles';
import { PatientInfo } from '../PatientInfo';
import { IPatients } from '../../types/patients';

interface IBottomSheetInfo {
  patient: IPatients
  closeBottomSheet: () => void;
  isOpen: boolean;
}

export function BottomSheetInfo({
  patient,
  closeBottomSheet,
  isOpen,
}: IBottomSheetInfo) {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['25%', '90%'], []);

  useEffect(() => {
    if (isOpen) {
      bottomSheetModalRef.current?.present();      
    } else {
      bottomSheetModalRef.current?.dismiss();
    }
  }, [isOpen]);

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
      >
        <ContentContainer>
          <PatientInfo
            closeBottomSheet={closeBottomSheet}
            patient={patient}
          />
        </ContentContainer>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}