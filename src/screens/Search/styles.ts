import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    padding: 0 24px;
    background-color: ${theme.colors.primary};    
  `};
`;

export const Header = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 70px;
    padding: 0 24px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.colors.primary};  
  `};
`;

export const HeaderAvatar = styled.Image`
  ${({ theme }) => css`
    width: 40px;
    height: 40px;
    border-radius: 20px;
  `}
`;

export const HeaderTitle = styled.Text`
  ${({ theme }) => css`
    font-size: 20px;
    font-weight: bold;
    color: ${theme.colors.text};
  `}
`;

export const SearchInput = styled.TextInput`
  ${({ theme }) => css`
    width: 100%;
    height: 50px;
    font-size: 18px;
    border-radius: 15px;
    padding: 0 16px;
    margin-bottom: 8px;
    color: ${theme.colors.text};
    background: ${theme.colors.gray_100};
  `};
  `;

export const ProfileContainer = styled.View`
  ${({ theme }) => css`
    padding: 24px 24px 0px 24px;
    margin-top: 20px;
    border-radius: 15px;
    background-color: ${theme.colors.background};
  `};
`;

export const ProfileContent = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background-color: ${theme.colors.gray_500};
  `};
`;

export const ProfileImage = styled.Image`
  width: 80px;
  height: 80px;
  margin: 8px;
  border-radius: 50px;
  align-self: center;
`;

export const ImageGithub = styled.Image`
  width: 280px;
  height: 280px;
  margin: 8px;
  border-radius: 50px;
  align-self: center;
`;

export const ProfileName = styled.Text`
  ${({ theme }) => css`
    font-size: 20px;
    font-weight: bold;
    margin: 5px;
    color: ${theme.colors.title};
  `};
`;

export const ProfileViewLocation = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background-color: ${theme.colors.gray_500};
  `}
`;

export const ProfileTextLocation = styled.Text`
  ${({ theme }) => css`
    font-size: 14px;
    margin:  0 5px;
    padding-bottom: 10px;
    color: ${theme.colors.text};
  `}
`;

export const ViewTextIHavenCreatedMyBioYet = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray_500};
  `}
`;

export const TextIHavenCreatedMyBioYet = styled.Text`
  ${({ theme }) => css`
    margin-top: 10px;
    color: ${theme.colors.attention};
  `};
`;

export const ProfileViewBio = styled.View`
  ${({ theme }) => css`
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: ${theme.colors.gray_500};
  `}
`;

export const ProfileTextBio = styled.Text`
  ${({ theme }) => css`
    font-size: 14px;
    margin: 0 5px 5px;
    color: ${theme.colors.text};
  `}
`;

export const ProfileDetail = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 100%;
    height: 50px;
    padding: 0 16px;
    margin-top: 2px;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.gray_700};
  `}
`;

export const ProfileDeashboard = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const ProfileLabelItem = styled.Text`
  ${({ theme }) => css`
    font-size: 12px;
    color: ${theme.colors.text};
    font-weight: bold;
  `}
`;

export const ProfileViewDeashboardItem = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileDeashboardItem = styled.Text`
  ${({ theme }) => css`
    font-size: 20px;
    color: ${theme.colors.shape};
  `}
`;

export const ProfileDetailText = styled.Text`
  ${({ theme }) => css`
    font-size: 18px;
    color: ${theme.colors.success};      
  `}
`;
