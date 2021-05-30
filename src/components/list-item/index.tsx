import styled from '@emotion/styled/macro';
import CheckIcon from 'assets/images/prospa-check.svg';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors?.grey01};
    font-size: 13px;
    margin-bottom: 1em;
`;

const Text = styled.div`
    margin-left: 1em;
`;

interface IProps {
    text: string;
}

const ListItem = ({ text }: IProps) => (
    <Wrapper>
        <img src={CheckIcon} alt="check-mark" />
        <Text>{text}</Text>
    </Wrapper>
);

export default ListItem;
