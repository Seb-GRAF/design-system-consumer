# Design System Consumer

Vite application consuming a custom design system. It is a showcase of the following issue: (https://github.com/mui/mui-x/issues/5349).

The `<LocalizationProvider>` context defined in the `src/ExampleWithError.tsx` file is not being passed to the DatePicker provided from the external design system. (open the console to see the error)

You can find an example with a fix, but it is not desired since it creates multiple instances of the `<LocalizationProvider>`.

## Installation

1. Clone the repository

2. Navigate to the project directory:

   ```
   cd design-system-consumer
   ```

3. Install dependencies:
   ```
   npm install
   ```

## Running the Application

To start the development server:

```
npm run dev
```

This will start the application and open a new browser window at `http://localhost:5173`.
