import axios from "axios";
import React from "react";

import jwt_decode from "jwt-decode";
import FileDownload from "js-file-download"
import {toast, ToastContainer} from "react-toastify";

// for individual

// npm i js-file-download

// npm i jwt-decode

export default function DownloadPdf() {

    const token = localStorage.getItem('token')
    const decodedToken = jwt_decode(token)
    const id = decodedToken.id
    async function handleClick() {
        axios.post("/individualNotes", {
            id
        })
        .then((response) => {
            FileDownload(response.data.message, "notes.pdf")
        })
        .catch((err) => {
            return toast.error(err)
        })
    }

    return (
        <div>
            <button onClick = {handleClick}>download notes</button>
        </div>
    )
}