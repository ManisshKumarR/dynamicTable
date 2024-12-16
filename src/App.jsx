import DynamicTable from "./components/dynamicTable";

function App() {
  const headers = [
    { label: "Name", value: "name", className: "head-1" },
    { label: "Age", value: "age", className: "head-2" },
    { label: "Email", value: "email", className: "head-3" },
  ];

  const data = [
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      className: "row-1",
    },
    {
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      className: "row-2",
    },
  ];

  const renderColumn = (header, row, rInd) => {
    return (
      <tr key={rInd}>
        {header.map((head, hInd) => (
          <td key={hInd} className={row.className}>
            {row[head.value]}
          </td>
        ))}
      </tr>
    );
  };

  return (
    <div className="App">
      <DynamicTable
        headers={headers}
        data={data}
        renderColumn={renderColumn}
        noDataMsg={"No data found"}
        tableClass={"tableClass"}
      />
    </div>
  );
}

export default App;
