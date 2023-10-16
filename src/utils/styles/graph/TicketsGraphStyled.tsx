import styled from "styled-components";

export const TicketsGraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.borderLight};
  max-width: 400px;
  width: 100%;
  padding: 20px;
  gap: 20px;
  max-height: 40vh;
  height: 100%;
`;

export const TicketsGraphHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.text};
  width: 100%;
`;

export const GraphHeaderTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 25px;
`;

export const GraphPieChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Inter;
  font-weight: bold;
`;
