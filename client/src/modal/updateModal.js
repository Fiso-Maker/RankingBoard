import * as React from "react";
import { Grid, Input, Table, TableCell, TableContainer, TableRow, TableBody, Select, MenuItem, Button, TextareaAutosize, Modal, Box, Stack, Typography, TextField } from "@mui/material";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import userListData from "../data/userList";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";

export default (props) => {
    const [rowData, setRowData] = React.useState(props.rowData.row);
    // const [trigger, setTrigger] = useRecoilState(userListData.Trigger);

    const handleChange = (prop) => (event) => {
        setRowData({ ...rowData, [prop]: event.target.value });
    };

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
    };

    const headerCellStyle = { width: "80px", fontWeight: "bold", color: "#505050", fontSize: "13px", backgroundColor: "#dfdfdf", borderBottom: "1px solid #ffffff" };
    const inputCellStyle = { fontSize: "13px" };

    const handleClose = () => {
        props.handleClose();
    };

    const deleteRowBtn = async () => {
        let postData = {
            idx: rowData.idx,
            userIdx: rowData.userIdx,
            score: rowData.score,
            updateDt: rowData.updateDt,
            season: rowData.season,
        };
        try {
            await axios.post("/api/user/CreateUserData", postData);

            alert("수정되었습니다.");
        } catch (error) {
            alert(error.response.data);
        }

        handleClose();
        // setTrigger(trigger + 1);
        // axios(`/api/user/info/update/tableName={props.tableName}, channelNo, 'setValues', 'condition'`)
    };

    return (
        <Modal open={props.isOpen} onClose={props.handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
                <Box sx={{ right: "5%", zIndex: 999, position: "absolute", cursor: "pointer" }}>
                    <CloseIcon sx={{ right: "10%", zIndex: 999 }} onClick={handleClose}></CloseIcon>
                </Box>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    입력
                </Typography>

                <div style={{ marginTop: 10 }}>
                    <Grid container spacing={2} sx={{ bgColor: "#dddddd", mt: 0 }}>
                        <Grid item xs={12}>
                            <TableContainer>
                                <Table style={{ border: "1px solid #dddddd" }} size="small">
                                    <TableBody>
                                        <TableRow>
                                            <TableCell sx={headerCellStyle}>userIdx</TableCell>
                                            <TableCell>
                                                <TextField id="standard-basic" variant="standard" sx={{ minWidth: 240 }} value={rowData.userIdx} onChange={handleChange("userIdx")} />
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                                <Table style={{ border: "1px solid #dddddd" }} size="small">
                                    <TableBody>
                                        <TableRow>
                                            <TableCell sx={headerCellStyle}>score</TableCell>
                                            <TableCell>
                                                <TextField id="standard-basic" variant="standard" sx={{ minWidth: 240 }} value={rowData.score} onChange={handleChange("score")} />
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                                <Table style={{ border: "1px solid #dddddd" }} size="small">
                                    <TableBody>
                                        <TableRow>
                                            <TableCell sx={headerCellStyle}>updateDt</TableCell>
                                            <TableCell>
                                                <TextField id="standard-basic" variant="standard" sx={{ minWidth: 240 }} value={rowData.updateDt} onChange={handleChange("updateDt")} />
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                                <Table style={{ border: "1px solid #dddddd" }} size="small">
                                    <TableBody>
                                        <TableRow>
                                            <TableCell sx={headerCellStyle}>season</TableCell>
                                            <TableCell>
                                                <TextField id="standard-basic" variant="standard" sx={{ minWidth: 240 }} value={rowData.season} onChange={handleChange("season")} />
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={8}>
                            <Box></Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box>
                                <Stack direction="row" spacing={2} sx={{ mt: 1 }} justifyContent="flex-end">
                                    <Button variant="outlined" color="error" onClick={deleteRowBtn}>
                                        삭제
                                    </Button>
                                    <Button variant="outlined" color="success" onClick={deleteRowBtn}>
                                        수정
                                    </Button>
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </div>
            </Box>
        </Modal>
    );
};
