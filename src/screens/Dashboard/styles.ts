import styled from 'styled-components/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.background};
  padding-bottom: 16px;
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
`;

export const SearchFilterContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const Search = styled.TextInput`
  flex: 1;
  border: 1px solid grey;
  border-radius: 8px;
  margin-right: 8px;
  padding: 8px;
`;

export const FilterIcon = styled(FontAwesome)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 24px;
  padding-left: 8px;
`;

export const FilterButton = styled.TouchableOpacity``;