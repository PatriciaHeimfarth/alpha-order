import './App.css';
import AlphaTableRow from './components/AlphaTableRow';

var alphabet = [];
var tableRowWithLetterList = [];

for (let i = 0; i < 26; i++) {
  alphabet.push((i + 10).toString(36).toUpperCase());
}

alphabet.forEach((item, index) => {
  tableRowWithLetterList.push(<AlphaTableRow letter={item}></AlphaTableRow>);
})



function App() {
  return (
    <div>
      <table>
        <tr>
          <th>Letter</th>
          <th>Ideas</th>
        </tr>
        {tableRowWithLetterList}
      </table>
      <br></br>
      <br></br>
      <br></br>
      <button>PRINT</button>
    </div>
  );
}

export default App;
