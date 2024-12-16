/* eslint-disable react/prop-types */
import { NoDataToShow } from "./noData";

const DynamicTable = ({
  headers,
  data,
  renderColumn,
  noDataMsg,
  tableClass,
}) => {
  return (
    <table className={tableClass}>
      <thead>
        <tr>
          {headers.map((hdata, index) => (
            <th key={`header-${index}`} className={hdata.className}>
              {hdata.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.length > 0 ? (
          data.map((row, rInd) => renderColumn(headers, row, rInd))
        ) : (
          <tr>
            <td colSpan={headers.length}>
              <NoDataToShow message={noDataMsg} />
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default DynamicTable;
