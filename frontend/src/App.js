import './App.css';
import AlphaTableRow from './components/AlphaTableRow';

function App() {
  return (
    <div>
      <table>
        <tr>
          <th>Letter</th>
          <th>Ideas</th>
        </tr>
        <AlphaTableRow letter="A" value="Hi"></AlphaTableRow>
      </table>
    </div>
  );
}

export default App;
