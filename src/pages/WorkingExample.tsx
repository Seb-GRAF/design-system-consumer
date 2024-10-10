import { InputDatePickerWithFix } from '@seb-graf/design-system';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFnsV3';


export default function App() {
  return (
    <InputDatePickerWithFix dateAdapter={AdapterDateFns} />
  );
}