import { useEffect, useState, memo } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { useTable } from 'react-table';

const ProductModal = ({ open, handleClose, sapSystemId }) => {
  const [data, setData] = useState([]);

  // fetching data from API and show it as table

  useEffect(() => {
    const fetchdata = async () => {
      const response2 = await axios.get(`https://sapd49.tyson.com/sap/opu/odata/sap/ZAPI_PRDVERS_SRV/SysDetailsSet?$filter=(Sysid eq '${sapSystemId}')&sap-client=100`, {
        headers: {

          'Content-Type': 'application/json',

          'Access-Control-Allow-Origin': '*',

          'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',

          // 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        },

        withCredentials: true,
        auth: {
          ususername: 'ANISHO',
          password: 'Lowkey@12345',
        },
      });
      setData(response2.data.d.results.map((item) => ({

        ProductName: item.Name,
        Version: item.Version,
        Description: item.Descript,
        ModifiedDate: item.ModDate,
        ModifiedTime: item.ModTime,
      })));
    }
    if (open) { fetchdata(); }

  }, [sapSystemId, open])
  const columns = [
    { Header: 'Product Name', accessor: 'ProductName' },
    { Header: 'Version', accessor: 'Version', className: 'version-column' },
    { Header: 'Description', accessor: 'Description' },
    { Header: 'Modified Date', accessor: 'ModifiedDate' },
    { Header: 'Modified Time', accessor: 'ModifiedTime' },
    { Header: 'Installed Year', accessor: 'InstalledYear' },
  ];

  const style = {
    // position: 'absolute',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
    // bgcolor: 'background.paper',
    // boxShadow: 24,
    // p: 4,
    // overflowY: 'auto',
    // '@media(min-width: 220px)': {
    //   width: '200px',
    // },
    // '@media(min-width: 340px)': {
    //   width: '310px',
    // },
    // '@media(min-width: 460px)': {
    //   width: '420px',
    // },
    // '@media(min-width: 760px)': {
    //   width: '700px',
    // },
    // '@media(min-width: 1000px)': {
    //   width: '920px',
    // },
    // '@media(min-width: 1200px)': {
    //   width: '1120px',
    // },
    // '@media(min-width: 1600px)': {
    //   width: '1520px',
    // },
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
  const otherVersions = data.filter(item => item.Status !== '+');

  const circleStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    marginRight: '5px',
  };

  const indicationsStyle = {
    position: 'absolute',
    bottom: '0',
    right: '0',
    alignItems: 'flex-end'
  };

  return (
    <div style={indicationsStyle}>
      <div style={{ marginRight: '10px', display: "flex", alignItems: "baseline" }}>
        <div style={{ ...circleStyle, backgroundColor: 'green' }}></div>
        <span>Active Version</span>
      </div>
      <div>
        <div style={{ marginRight: '10px', display: "flex", alignItems: "baseline" }}>
          <div style={{ ...circleStyle, backgroundColor: 'red' }}></div>
          <span>Old Version</span>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
