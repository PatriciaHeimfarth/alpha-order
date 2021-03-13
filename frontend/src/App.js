import './App.css';
import AlphaTableRow from './components/AlphaTableRow';
import { jsPDF } from "jspdf";

var alphabet = [];
var tableRowWithLetterList = [];



for (let i = 0; i < 26; i++) {
  alphabet.push((i + 10).toString(36).toUpperCase());
}

alphabet.forEach((item, index) => {
  tableRowWithLetterList.push(<AlphaTableRow letter={item}></AlphaTableRow>);
})

function toPdf() {
  const doc = new jsPDF();
  
  for(let a = 0; a < alphabet.length; a++) {
    doc.text(alphabet[a], 10, a * 10 + 10);
  }
   
  doc.save("a4.pdf");
}


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
      <button onClick={toPdf}>PRINT</button>

    </div>
  );
}

export default App;
