function AlphaTableRow(props) {
    return (
        <tr>
            <td>{props.letter}</td>
            <td>
             <input type="text" size="100"></input>
            </td>
        </tr>
    );
}

export default AlphaTableRow;