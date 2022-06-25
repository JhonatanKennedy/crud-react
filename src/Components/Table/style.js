import styled from "styled-components";

export const TableComponent = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.tr`
  background-color: #696e87;
  th {
    padding: 0.625rem 0.9375rem;
    text-align: left;
  }
`;

export const TableBody = styled.tr`
  background-color: ${(props) => props.theme.primary};
  td {
    padding: 0.625rem 0.9375rem;
    text-align: left;
  }
`;
