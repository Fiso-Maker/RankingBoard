import { DataGrid, useGridApiRef } from "@mui/x-data-grid";
import * as React from "react";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { Button, Box, Typography, Modal } from "@mui/material";
import userListData from "../data/userList";
import InsertModal from "../modal/insertModal";
import UpdateModal from "../modal/updateModal";
import dayjs from "dayjs";

const columns = [
    { field: "idx", headerName: "idx", width: 150 },
    { field: "userIdx", headerName: "userIdx", width: 150 },
    { field: "score", headerName: "score", width: 150 },
    {
        field: "updateDt",
        headerName: "updateDt",
        width: 300,
        valueGetter: (params) => {
            return dayjs(params.value).format("YYYY-MM-DD HH:mm:ss");
        },
    },
    { field: "season", headerName: "season", width: 150 },
];

export default function RankingBoardGrid(props) {
    const userList = useRecoilValue(userListData.userListSelector);

    const [rowData, setRowData] = useRecoilState(userListData.currentResult);

    const [insertModalOpen, setInsertModalOpen] = React.useState(false);
    const [updateModalOpen, setUpdateModalOpen] = React.useState(false);

    const insertOpen = () => setInsertModalOpen(true);
    const handleClose = () => {
        setInsertModalOpen(false);
        setUpdateModalOpen(false);
    };
    return (
        <div style={{ height: 300, width: "100%" }}>
            <DataGrid
                rows={userList}
                columns={columns}
                getRowId={(row) => row.idx}
                onRowDoubleClick={(row) => {
                    setRowData({ ...row });

                    if (setUpdateModalOpen) {
                        setUpdateModalOpen(true);
                    }
                }}
            />
            <Button onClick={insertOpen}>INSERT</Button>
            <InsertModal isOpen={insertModalOpen} handleClose={handleClose}></InsertModal>
            <UpdateModal isOpen={updateModalOpen} handleClose={handleClose} rowData={rowData}></UpdateModal>
        </div>
    );
}
