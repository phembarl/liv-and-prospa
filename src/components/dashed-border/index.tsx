import styled from '@emotion/styled/macro';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 0.25em;
    div {
        background-color: rgba(255, 255, 255, 0.5);
        height: 2px;
        border-radius: 50px;

        &.first {
            background-color: #fff;
        }
    }
`;

interface IProps {
    className?: string;
}

const DashedBorder = ({ className }: IProps) => (
    <Wrapper className={className}>
        <div className="first" />
        <div />
        <div />
        <div />
        <div />
    </Wrapper>
);

DashedBorder.defaultProps = {
    className: '',
};

export default DashedBorder;
