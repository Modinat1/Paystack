import React, {useState, useEffect} from "react";
// import Navbar from "./components/Navbar/Navbar";
import Navbar from "./components/Navbar/Navbar";
import Showcase from "./components/Showcase";
import Payment from "./components/Payment";
import Transaction from "./components/Transaction";
import Footer from "./components/Footer";
import axios from "axios";

function App() {
  const [showBurger, setShowBurger] = useState(false)
  const [transactionData, setTransactionData] = useState([]);
	// const [isloading, setisloading] = useState(false);
  const [fetch, setFetch] = useState(false)

	const url = "https://api.paystack.co/transaction";

	useEffect(() => {
		const fetchPay = async () => {
			// setisloading(true);
			try {
				const response = await axios.get(url, {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
					},
				});
				const dataResponse = response.data.data;
				setTransactionData(dataResponse);
			} catch (error) {
				console.log(error);
			}
			// setisloading(false);
			console.log("Data fetch complete");
		};
		fetchPay();
	}, []);

  return (
    <div className="App">
     <Navbar showBurger={showBurger} setShowBurger={setShowBurger}/>
     <Showcase/>
     <Payment/>
     <Transaction transactionData={transactionData} fetch={fetch} setFetch={setFetch}/>
     <Footer/>
    </div>
  );
}

export default App;
