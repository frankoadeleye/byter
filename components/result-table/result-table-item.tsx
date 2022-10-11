import { TableHeading, BodyData } from "./data";
import { TableBlock, TableWrapper } from "./styles";

const ResultTableItem = ({ children }) => {
  return (
    <TableWrapper>
      <TableBlock>
        <thead>
          <tr>
            {TableHeading.map((heading, index) => {
              return (
                <th scope="col" key={index}>
                  {heading}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </TableBlock>
    </TableWrapper>
  );
};

export default ResultTableItem;
