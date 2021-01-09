import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import { useSelector } from 'react-redux';
import { AppState } from 'frontend/redux/root-reducer';

export const ProfileTable: React.FC = () => {
  const { viewer } = useSelector((state: AppState) => state.auth);

  if (!viewer) return null;

  return (
    <TableContainer component={Paper} elevation={6}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={2} align="center">
              Data
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Name
            </TableCell>
            <TableCell align="right">{viewer.firstName}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Email
            </TableCell>
            <TableCell align="right">{viewer.email}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              ID
            </TableCell>
            <TableCell align="right">{viewer.id}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
