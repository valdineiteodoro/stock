import React from 'react'
import organizeData from '../../util/organizeDataForm'
import './Table.scss'

 export declare interface TableHeader {
  key: string
  value: string
  right?: boolean
}

declare interface TableProps{
  header:TableHeader[]
    data: any[]

    enableActions?: boolean

    onDelete?: (intem : any ) => void
    onDetail?: (intem : any ) => void
    onEdit?: (intem : any ) => void
  
 }



const Table :React.FC<TableProps> = (props) => {
  const [organizedData, indexedHeaders] = organizeData(props.data, props.header)
  return <table className="AppTable">
    <thead>
      <tr>
        {
          props.header.map(header =>
            <th
              className={header.right ? 'right' : ''}
              key={header.key}
            >
              {header.value}
            </th>
          )
        }
      </tr>
    </thead>
    <tbody>
      {
        organizedData.map((row, i) => {
          return <tr key={i}>
            {
              Object
                .keys(row)
                .map((item, i) =>
                  item !== '$original'
                    ? <td
                        key={row.$original.id + i}
                        className={indexedHeaders[item].right ? 'right' : ''}
                      >
                        { row[item] }
                      </td>
                    : null
                )
            }
          </tr>
        })
      }
    </tbody>
  </table>
}

export default Table