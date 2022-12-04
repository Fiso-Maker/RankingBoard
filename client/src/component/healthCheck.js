import React from "react";
import Button from "@mui/material/Button";
import axios from "axios";

export default function HealthCheck() {
    async function changeText() {
        await callApi();
    }

    function callApi() {
        axios
            .get("/api/healthCheck")
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div>
            <Button onClick={changeText} variant="contained">
                HealthCheck
            </Button>
        </div>
    );
}
