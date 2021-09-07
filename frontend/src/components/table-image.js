import React, {Component} from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper"
import TableHead from "@material-ui/core/TableHead";
import {connect} from "react-redux";
import {getTableImage} from "../actions/site";
import {Chip} from "@material-ui/core";


function createData(name, calories, fat) {
    return {name, calories, fat};
}

const rows = [
    createData("Cupcake", 305, 3.7),
    createData("Donut", 452, 25.0),
    createData("Eclair", 262, 16.0),
    createData("Frozen yoghurt", 159, 6.0),
    createData("Gingerbread", 356, 16.0),
    createData("Honeycomb", 408, 3.2),
    createData("Ice cream sandwich", 237, 9.0),
    createData("Jelly Bean", 375, 0.0),
    createData("KitKat", 518, 26.0),
    createData("Lollipop", 392, 0.2),
    createData("Marshmallow", 318, 0),
    createData("Nougat", 360, 19.0),
    createData("Oreo", 437, 18.0)
].sort((a, b) => (a.calories < b.calories ? -1 : 1));


class TableImage extends Component {
    state = {
        page: 0,
        rowsPerPage: 10
    }

    componentDidMount() {
        this.props.getTableImage(null, this.props.start_date, this.props.end_date, (this.state.page + 1))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.start_date !== this.props.start_date || prevProps.end_date !== this.props.end_date) {
            this.props.getTableImage(null, this.props.start_date, this.props.end_date, 1)
            this.setState({page: 0});
        }
    }

    handleChangePage = (event, newPage) => {
        if (newPage > this.state.page)
            this.props.getTableImage(null, this.props.start_date, this.props.end_date, (newPage + 1))
        this.setState({page: newPage});
    };

    handleChangeRowsPerPage = (event) => {
        this.setState({rowsPerPage: parseInt(event.target.value, 10)});
        this.setState({page: 0});
    };

    render() {

        const {page, rowsPerPage} = this.state;

        // const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
        return (
            <Paper className="mb4">
                <TableContainer style={{maxHeight: 500}}>
                    <Table size="small" stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Image</TableCell>
                                <TableCell>Specie</TableCell>
                                <TableCell>Camera</TableCell>
                                {/*<TableCell align="right">Calories</TableCell>*/}
                            </TableRow>
                        </TableHead>


                        {this.props.image_table.results.length !== 0 ?
                            <TableBody>{(rowsPerPage > 0
                                    ? this.props.image_table.results.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    : this.props.image_table.results
                            ).map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>
                                        {row.id}
                                    </TableCell>
                                    <TableCell>
                                        <img
                                            src={row.file.replace("http://127.0.0.1:8000/media", "https://tpilums.org.pk/media")}
                                            height={80}/>

                                    </TableCell>
                                    <TableCell>
                                        {row.boundingbox_set.map((item) => (
                                            <Chip
                                                className="mr1"
                                                style={{backgroundColor: item.specie.color}}
                                                color="primary"
                                                key={item.key}
                                                label={item.specie.name}

                                            />))}
                                    </TableCell>
                                    <TableCell>
                                        {row.camera}
                                    </TableCell>
                                </TableRow>
                            ))}</TableBody> :
                            <div className="container tc">Loading Data....</div>}

                        {/*{emptyRows > 0 && (*/}
                        {/*    <TableRow style={{height: 53 * emptyRows}}>*/}
                        {/*        <TableCell colSpan={6}/>*/}
                        {/*    </TableRow>*/}
                        {/*)}*/}

                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[]}
                    component="div"
                    count={this.props.image_table.count !== null ? this.props.image_table.count : "loading..."}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}/>
            </Paper>
        );
    }
}

const mapStateToProps = state => ({
    image_table: state.site.image_table,
    start_date: state.site.start_date,
    end_date: state.site.end_date,
});

export default connect(mapStateToProps, {getTableImage})(TableImage);