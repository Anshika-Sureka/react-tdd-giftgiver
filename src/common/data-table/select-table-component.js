import { React, useState, useRef, useEffect } from "react";
import TableRowComponent from "./table-row-component";
import downloadIcon from "../../download.svg";

require('./styles.scss');

function SelectTableComponent(props) {
  const { column, rowData } = props;
  const [selectCount, setSelectCount] = useState(0);
  const selectAllRef = useRef(null);

  useEffect(() => {
    if (selectCount === rowData.length) {
      selectAllRef.current.checked = true;
      selectAllRef.current.indeterminate = false;
    } else if (selectCount === 0) {
      selectAllRef.current.checked = false;
      selectAllRef.current.indeterminate = false;
    } else {
      selectAllRef.current.indeterminate = true;
    }
  }, [selectCount, rowData]);

  const updateSelect = (row) => {
    row.selected
      ? setSelectCount(selectCount + 1)
      : setSelectCount(selectCount - 1);
  };

  const toggleSelectAll = (e) => {
    if (selectCount === rowData.length) {
      deSelectAllRows();
    } else if (selectCount < rowData.length) {
      selectAllRows();
    }
  };

  const deSelectAllRows = () => {
    rowData.forEach((row) => {
      row.selected = false;
    });
    setSelectCount(0);
  };

  const selectAllRows = () => {
    rowData.forEach((row) => {
      row.selected = true;
    });
    setSelectCount(rowData.length);
  };

  const downloadSelected = () => {
      let message = rowData.reduce((acc,cur) => {
          if(cur.selected && cur.status === 'available'){
             acc.push("\npath: "+cur.path+"\ndevice: "+cur.device);
          }
          return acc;
      },[])
      alert(message.join());
      return;
  }

  const renderDownload = () => {
    return (
    <button
        text="Download Selected"
        onClick={downloadSelected}
        className="format-download"
    >
        <img src={downloadIcon} alt="download" /> Download Selected
    </button>
    );
  }

  const renderHeader = () => {
    return (
      <thead>
        <tr>
          <th> </th>
          {column.map((e, index) => (
            <th key={index}>{e.name}</th>
          ))}
        </tr>
      </thead>
    );
  };

  const renderRows = () => {
    return (
      <tbody>
        {rowData.map((row) => {
          return (
            <TableRowComponent
              column={column}
              row={row}
              key={row.name}
              updateSelect={updateSelect}
            />
          );
        })}
      </tbody>
    );
  };

  return (
    <div className="file-table-container">
      <div className="file-table-header">
        <span>
          <input
            type="checkbox"
            aria-label="select all checkbox"
            name="select-all"
            id="select-all"
            onChange={toggleSelectAll}
            className=""
            ref={selectAllRef}
          />
        </span>
         <span>{selectCount? `Selected ${selectCount}`:`None Selected`}</span>
       <span>{renderDownload()}</span>
      </div>
      <div className="">
        <table>
          {renderHeader()}
          {renderRows()}
        </table>
      </div>
    </div>
  );
}

export default SelectTableComponent;
