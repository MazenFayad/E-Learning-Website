import axios from "axios"
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";

const Wallet=()=>{
	const t = localStorage.getItem('token');
    const decodedToken = jwt_decode(t);
    const myid = decodedToken.id;
	const [money, setMoney] = useState(null);
    useEffect(() => {
        const fetchdata = async () => {
            console.log("the", myid);
            await fetch('/money/' + myid)
                .then((response) => {
                    console.log(response.ok);
                    if (!response.ok)
                        throw Error("Can not Connect!!!!")
                    return response.json()
                })
                .then((data) => {
                    setMoney(data);


                }).catch((e) => {
                    console.log(e.message)
                });



        }
        fetchdata();
    }
        , [])


	
return(
<body>
	<div class="wallet-container text-center">
		<p class="page-title"><i class="fa fa-align-left"></i><strong>My E-wallet</strong><i class="fa fa-user"></i></p>

		<div class="amount-box text-center">
			<img src="https://lh3.googleusercontent.com/ohLHGNvMvQjOcmRpL4rjS3YQlcpO0D_80jJpJ-QA7-fQln9p3n7BAnqu3mxQ6kI4Sw" alt="wallet" height={"150px"}/>
			<p>Total Balance: <p class="amount">{money}</p>
			</p>
			
		</div>

		<div class="btn-group text-center">
			<button type="button" class="btn btn-primary">Add Money</button>
			<button type="button" class="btn btn-primary">Widthdraw</button>
			</div>

			<div class="txn-history">
				<p><b>History</b></p>
				<p class="txn-list">Payment to xyz shop <span class="debit-amount"><strong>-$100</strong></span></p>

				<p class="txn-list">Payment to abc shop <span class="debit-amount"><strong>-$150</strong></span></p>

				<p class="txn-list">Credit From abc ltd <span class="credit-amount"><strong>+$300</strong></span></p>

				<p class="txn-list">Transfer From John Doe <span class="credit-amount"><strong>+$100</strong></span></p>
			</div>

			<div class="footer-menu">
				<div class="row text-center">
					<div class="col-md-3">
						<i class="fa fa-home"></i>
						<p>Home</p>
					</div>

					<div class="col-md-3">
						<i class="fa fa-inbox"></i>
						<p>Inbox</p>
					</div>

					<div class="col-md-3">
						<i class="fa fa-university"></i>
						<p>Bank</p>
					</div>

					<div class="col-md-3">
						<i class="fa fa-barcode"></i>
						<p>Scan</p>
					</div>
				</div>
			</div>
</div>
</body>
);
}
export default Wallet