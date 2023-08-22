import { useEffect, useState, memo } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { useTable } from 'react-table';

const ProductModal = ({ open, handleClose, sapSystemId }) => {
  const [data, setData] = useState([]);

  // fetching data from API and show it as table
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://sapd49.tyson.com/sap/opu/odata/sap/ZAPI_PRDVERS_SRV/SysDetailsSet?$filter=(Sysid eq '${sapSystemId}')&sap-client=100`, {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true,
          auth: {

            username: 'ANISHO',
            password: 'Lowkey@12345',
          },
          // Assuming you will handle the authentication server-side,
          // the auth part is removed here.
        });
  
        console.log(response.data.d.results);
  
        setData(response.data.d.results.map((item) => ({
          ProductName: item.Name,
          Version: item.Version,
          Description: item.Descript,
          ModifiedDate: item.ModDate,
          ModifiedTime: item.ModTime,
          InstalledYear: new Date(item.ModDate).getFullYear(),
          Status: item.Inststatus,
        })));
  
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  
    if (open) {
      fetchData();
    }
  }, [sapSystemId, open]);
  
  const columns = [
    { Header: 'Product Name', accessor: 'ProductName' },
    { Header: 'Version', accessor: 'Version', className: 'version-column' },
    { Header: 'Description', accessor: 'Description' },
    { Header: 'Modified Date', accessor: 'ModifiedDate' },
    { Header: 'Modified Time', accessor: 'ModifiedTime' },
    { Header: 'Installed Year', accessor: 'InstalledYear' },
  ];

  const style ={
    position: 'absolute',
    top: '50%',
    left: '50%',
    overflow: 'scroll',
    height: '100%',
    display: 'block',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    transform: 'translate(-50%, -50%)',
    '@media(min-width: 220px)': {
      width: '200px',
    },
    '@media(min-width: 340px)': {
      width: '310px',
    },
    '@media(min-width: 460px)': {
      width: '420px',
    },
    '@media(min-width: 760px)': {
      width: '700px',
    },
    '@media(min-width: 1000px)': {
      width: '920px',
    },
    '@media(min-width: 1200px)': {
      width: '1120px',
    },
    '@media(min-width: 1600px)': {
      width: '1520px',
    },
  };

  const sapSystemIdStyle = {
    textAlign: 'center',
    color: '#002554',
    fontWeight: 'bold',
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div style={sapSystemIdStyle}>System ID: {sapSystemId}</div>
        <TableComponent columns={columns} data={data} />
        <VersionStatus data={data} />
      </Box>
    </Modal>
  );
};

const TableComponent = memo(({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()} className="table table-responsive table-bordered responsive-lg responsive-md responsive-sm sap-system-table">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} key="header-row">
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} key={column.Header}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={`${row.original.SystemID}-${row.original.ProductID}`}>
              {row.cells.map(cell => {
                let cellStyle = {};
                if (cell.column.Header === 'Version') {
                  cellStyle = {
                    fontWeight: 'bold',
                    color: cell.row.original.Status === '+' ? 'green' : 'red',
                  };
                }
                return (
                  <td
                    {...cell.getCellProps()}
                    key={cell.column.Header}
                    style={cellStyle}
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
});

const VersionStatus = ({ data }) => {
  const activeVersions = data.filter(item => item.Status === '+');
  const otherVersions = data.filter(item => item.Status === '-');

  const circleStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    marginRight: '5px',
  };

  const indicationsStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    zIndex: 1,
    display: 'flex',          // <-- This will make its children inline (side-by-side)
    flexDirection: 'row',     // Ensure children are in a row
    alignItems: 'center',     // Vertically align items in the center
  };

  return (
    <div style={indicationsStyle}>
      <div style={{ display: 'flex', alignItems: 'center', marginRight: '15px' }}>
        <div style={{ ...circleStyle, backgroundColor: 'green' }}></div>
        <span>Active Version</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ ...circleStyle, backgroundColor: 'red' }}></div>
        <span>Old Version</span>
      </div>
    </div>
  );
};

  
export default ProductModal;