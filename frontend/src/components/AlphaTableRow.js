
function AlphaTableRow(props) {

    const handleChange = (event) => {
       // this.setState({ [event.target.name]: event.target.value });
       alert("hi")
    }
    

    return (
        <tr>
            <td>{props.letter}</td>
            <td>
                <input type="text" size="100" onChange={handleChange}></input>
            </td>
        </tr>
    );
}

export default AlphaTableRow;