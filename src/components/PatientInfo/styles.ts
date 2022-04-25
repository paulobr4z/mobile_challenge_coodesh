import styled from 'styled-components/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const CloseButtonContainer = styled.TouchableOpacity`
  position: absolute;
  top: 0px;
  right: 20px;
`;

export const CloseIcon = styled(FontAwesome)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 24px;
`;

export const PatientImageContainer = styled.View`
  position: absolute;
  top: -10px;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const PatientImage = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 60px;
`;