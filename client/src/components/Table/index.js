import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';



export default function BasicTable(props) {
  function updateTicket(id) {
    setTicketId(id);
    console.log(typeof(ticketid));
    if (typeof(ticketid) == 'number') {
      console.log(ticketid);
      singleTicket(ticketid);
    }
  };
  const [ticketid, setTicketId] = useState('');
  useEffect(() => {
    updateTicket();
  }, []);

  const data = props.ticket;
  if (data.length === 0) {
    console.log("length < 0");
    return (
      <h3>No Tickets Yet</h3>
    );
  } else {
    data.pop();
  }


  async function singleTicket() {
    if (typeof(ticketid) == 'number')  {
      console.log(typeof(ticketid));
      const response = await fetch(`http://127.0.0.1:3001/api/profile/t/` + ticketid, {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          //line above is part of fetch()
        },
      });
    if (response.ok) {
      console.log("okay");
    } else {
      console.log(response);
    };
  };
  };

  return (
    <TableContainer component={Paper} sx={{ maxWidth: '97%', m: 'auto' }}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Ticket ID</TableCell>
            <TableCell align="right">Subject</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Last Update</TableCell>
            <TableCell align="right">Assigned</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              onClick={() => updateTicket(row.id)}

            >
              <TableCell component="th" scope="row">
                {row.id}</TableCell>

              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.updatedAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
