import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const Appoinments = ({ date }) => {
  const { user } = useAuth();
  const [appoinments, setAppoinments] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/appoinments?email=${user.email}&date=${date}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAppoinments(data));
    // date deyar mane hoolo date change hole abar call korbe database theke tai depandency hisebe date deoya hoise
  }, [date]);
  return (
    <div>
      <h2>Appoinments {appoinments.length}</h2>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Time</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appoinments.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.patientName}
                </TableCell>
                <TableCell align="right">{row.time}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Appoinments;
