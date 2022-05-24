import { React } from "react";

function TableRowComponent(props) {
  const { column, row, updateSelect } = props;

  const toggleCheckbox = (e) => {
    row.selected = e.target.checked;
    updateSelect(row);
  };

/*   const disableCheckbox = (status) => {
    if (status !== "available") {
      return true;
    }
    return false;
  }; */

  const getSelectedClasses = (row) => {
    return row.selected ? "selected" : "";
  };

  return (
    <tr className={getSelectedClasses(row)}>
      <td>
        <label name={row.name}>
          <input
            type="checkbox"
            name={row.name}
            checked={row.selected}
            onChange={(e) => toggleCheckbox(e)}
            /* disabled={disableCheckbox(row.status)} */
          />
        </label>
      </td>
      {column.map((e) => (
        <td key={e.key} className={`${((e.key === 'status') && (row[e.key] === 'available')) && 'available'}`}>{row[e.key]}</td>
      ))}
    </tr>
  );
}
export default TableRowComponent;
