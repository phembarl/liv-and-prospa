import styled from '@emotion/styled/macro';
import Chart from 'react-apexcharts';

export const GraphWrapper = styled.div`
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(131, 151, 171, 0.16);
    width: 53%;
    border-radius: 6px;
    padding: 1em 1.5em;
    overflow: hidden;

    .title {
        font-family: ${({ theme }) => theme.fonts?.brFirmaSemiBold};
        color: ${({ theme }) => theme.colors?.purpleDark};
        font-size: 18px;
    }
`;

const SummaryContainer = styled.div`
    margin-top: 1em;
    display: flex;
    align-items: center;
`;

const Summary = styled.div`
    margin-right: 2em;
    .summary-title {
        font-family: ${({ theme }) => theme.fonts?.brFirmaMedium};
        color: ${({ theme }) => theme.colors?.grey01};
        font-size: 14px;
    }

    .summary-value {
        font-family: ${({ theme }) => theme.fonts?.brFirmaSemiBold};
        color: ${({ theme }) => theme.colors?.purpleDark};
        font-size: 14px;
    }
`;

const Graph = styled.div`
    margin-top: 2em;
    overflow: hidden;
`;

const GraphCard = () => {
    const options = {
        chart: {
            id: 'area',
            toolbar: {
                show: false,
            },
            brush: {
                enabled: true,
                target: 'area',
            },
        },

        xaxis: {
            categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG'],
        },
        colors: ['#FA4A84'],
    };

    const series = [
        {
            name: 'series-1',
            data: [4, 8, 11, 12, 11, 8, 6, 9],
        },
    ];

    return (
        <GraphWrapper>
            <p className="title">June Summary</p>
            <SummaryContainer>
                <Summary>
                    <p className="summary-title">Money In</p>
                    <p className="summary-value">N5,650,000</p>
                </Summary>

                <Summary>
                    <p className="summary-title">Money Out</p>
                    <p className="summary-value">N5,650,000</p>
                </Summary>

                <Summary>
                    <p className="summary-title">Difference</p>
                    <p className="summary-value">N5,650,000</p>
                </Summary>
            </SummaryContainer>

            <Graph>
                <Chart options={options} series={series} type="area" width="100%" />
            </Graph>
        </GraphWrapper>
    );
};

export default GraphCard;
