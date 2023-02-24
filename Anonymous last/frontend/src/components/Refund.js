import React, { useEffect, useState } from "react"
import  Request from "./Request"
import axios from 'axios'

export default function Refund() {
    const [requests, setRequests] = useState([{email: "", title: "", price: 0, individualId: "", courseId: ""}])



    useEffect(()=> {
        axios.get('/requests')
        .then(res => {
            setRequests(res.data)
        })
        
    },[])

    const requestComponents = requests.map((item) => {
        return <Request price = {item.price} email = {item.email} title = {item.title} handleAccept = {handleAccept} handleReject = {handleReject} individualId = {item.individualId} courseId = {item.courseId}/> 
    })

    async function handleAccept(email, price, title, individualId, courseId) {
        const newRequests = requests.filter(item => item.email !== email || item.title !== title)

        alert("Refund Accepted");
        await axios.post("/acceptRequest", {
            email,
            price,
            individualId,
            courseId
        })
        .then((response) => {
            console.log(response.data)
        })
        .catch((err) => {
            console.log(err)
        })

        setRequests(newRequests)
    }

    async function handleReject(email, title, individualId, courseId) {
        alert("Refund Rejected");
        const newRequests = requests.filter(item => item.email !== email || item.title !== title)
        await axios.post("/acceptRequest", {
            individualId,
            courseId
        })
        .then((response) => {
            console.log(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
        setRequests(newRequests)
    }

    return (
        <div>
            {requestComponents}
        </div>
    )




}

