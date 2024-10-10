export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem', }}>
      <a href="/example-with-error">Example of desired usage (throws errors)</a>
      <a href="/working-example">Example with a fix (not desired)</a>
    </div>
  );
}