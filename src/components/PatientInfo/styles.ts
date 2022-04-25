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

export const PatientImage = styled.Image`
  height: 90px;
  width: 90px;
  border-radius: 90px;
  margin-top: 16px;
`;

export const PatientInfoContainer = styled.View`
  width: 100%;
  align-items: flex-start;
  margin-top: 8px;
  padding: 16px;
`;

export const PatientInfoTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
`;

export const PatientInfoText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  margin-bottom: 16px;
`;