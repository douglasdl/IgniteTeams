import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonIconTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
    width: 56px;
    height: 56px;
    
    align-items: center;
    justify-content: center;

    margin-left: 12px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
    size: 24,
    color: type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
}))``;