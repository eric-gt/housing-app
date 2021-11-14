import { useState } from 'react'
import Button from './Button'
import ModalForm from './ModalForm'

export default function MainTable ({ tableConfig, tableRows }) {
    const [columns, setColumns] = useState(tableConfig.columnNames);
    const [rows, setRows] = useState(tableRows);
    return (
      <div>
        <table className=" border-collapse border border-slate-400 table-auto">
        <thead>
          <tr className="bg-sky-500/25 text-center align-baseline">
            {columns.map(col => {
              return <th className="px-1 border border-slate-400">{col}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {mapDataToTable(rows)}
        </tbody>
      </table>
      <div className="container py-2">
        <ModalForm text={"Add Row"} />
        <Button text={"Add Criterion"} onClick={addCriterion} />
      </div>
    </div>
    );

  function addCriterion() {
    const newColumns = [...columns, 'newColumn'];
    setColumns(newColumns);
  } 

  function addRow(rowData = {}) {
    const newRows = [...rows, mapDataToTable([{...rowData}])]
    setRows(newRows);
  }


  function mapDataToTable(data) {
    const rows = data.map(row => {
      return (
        <tr className="text-center align-middle">
          {
            Object.values(row).map(col => {
              return <td className="border border-slate-300">{col}</td>
            })
          }
        </tr>
      )
    })
    return rows
  }
}

