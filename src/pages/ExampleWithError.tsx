import { InputDatePicker } from '@seb-graf/design-system';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFnsV3';


export default function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <InputDatePicker />
    </LocalizationProvider>
  );
}