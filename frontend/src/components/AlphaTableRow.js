function AlphaTableRow(props) {
    return (
        <tr>
            <td>{props.letter}</td>
            <td>{props.value}</td>
        </tr>
    );
}

export default AlphaTableRow;