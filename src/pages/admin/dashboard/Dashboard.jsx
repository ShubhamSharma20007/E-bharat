import React from 'react'
import Layout from '../../../components/layout/Layout'
import Men from "../../../Images/user.png"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
const Dashboard = () => {
  return (
    <>
     <Layout>
      <div className="grid grid-cols-1">
      <div className=" grid grid-cols-1 lg:grid-cols-4 h-40 gap-4  m-5  relative ">
      <div class="border shadow-lg  hover:shadow-xl">
      <div className="img-container ">
      <img src={Men} alt="" width="50px" className=' text-center mx-auto my-3' />
      </div>
      <div className="count">
      <h1 className='text-3xl text-center font-bold'>10</h1>
      </div>
      <div className="total-container">
        <h2 className='text-center font-semibold text-2xl'>Total Prodcuts</h2>
      </div>
      </div>
      <div class="border shadow-lg  hover:shadow-xl">
      <div className="img-container ">
      <img src={Men} alt="" width="50px" className=' text-center mx-auto my-3' />
      </div>
      <div className="count">
      <h1 className='text-3xl text-center font-bold'>10</h1>
      </div>
      <div className="total-container">
        <h2 className='text-center font-semibold text-2xl'>Total Orders</h2>
      </div>
      </div>
      <div class="border shadow-lg  hover:shadow-xl">
      <div className="img-container ">
      <img src={Men} alt="" width="50px" className=' text-center mx-auto my-3' />
      </div>
      <div className="count">
      <h1 className='text-3xl text-center font-bold'>10</h1>
      </div>
      <div className="total-container">
        <h2 className='text-center font-semibold text-2xl'>Total Prodcuts</h2>
      </div>
      </div>
      <div class="border shadow-lg  hover:shadow-xl">
      <div className="img-container ">
      <img src={Men} alt="" width="50px" className=' text-center mx-auto my-3' />
      </div>
      <div className="count">
      <h1 className='text-3xl text-center font-bold'>10</h1>
      </div>
      <div className="total-container">
        <h2 className='text-center font-semibold text-2xl'>Total Users</h2>
      </div>
      </div>
    
      </div>

     <div className="tabs relative " >
     <Tabs>
      
    <TabList>
      <Tab>Order</Tab>
      <Tab >User</Tab>
      <Tab>Product</Tab>
    </TabList>

    <TabPanel>
   
    <table class="table-auto grid grid-cols-1 w-screen max-w-full overflow-auto">
  <thead>
  <h1 className='text-center font-bold text-3xl my-5'>Order</h1>
    <tr className='flex justify-evenly'>
    {/* <th>PAYMENT ID</th> */}
      <th>IMAGE</th>
      <th>TITLE</th>
      <th>PRICE</th>
      <th>CATEGORY</th>
      <th>IMAGE</th>
      <th>ADDRESS</th>
      <th>PINCODE</th>
      <th>PHONE NUMBER</th>
      <th>EMAIL</th>
      <th>DATE</th>
    </tr>
  </thead>
  <tbody>
    
    <tr className='flex  justify-evenly'>
      {/* <td>1</td> */}
      <td>image1</td>
      <td>fontawesome</td>
      <td>1200</td>
      <td>images</td>
      <td>boatimage</td>
      <td>alwar</td>
      <td>301001</td>
      <td >7073830702</td>
      <td>shubham@gmail.com</td>
      <td>30-09-2000</td>
    </tr>
    
  </tbody>
</table>
    </TabPanel>
    <TabPanel>
    <table class="table-auto grid grid-cols-1 w-screen max-w-full overflow-auto">
  <thead>
  <h1 className='text-center font-bold text-3xl my-5'>User</h1>
    <tr className='flex justify-evenly'>
    {/* <th>PAYMENT ID</th> */}
      <th>NAME</th>
      <th>ADDRESS</th>
      <th>PINCODE</th>
      <th>PHONE NUMBER</th>
      <th>EMAIL</th>
      <th>DATE</th>
     
    </tr>
  </thead>
  <tbody>
    
    <tr className='flex  justify-evenly'>
      {/* <td>1</td> */}
      <td>image1</td>
      <td>fontawesome</td>
      <td>1200</td>
      <td>images</td>
      <td>boatimage</td>
      <td>30/09/2000</td>
      
    </tr>
    
  </tbody>
</table>
    </TabPanel>
    <TabPanel>
    <table class="table-auto grid grid-cols-1 w-screen max-w-full overflow-auto">
  <thead>
  <h1 className='text-center font-bold text-3xl my-5'>Products</h1>
    <tr className='flex justify-evenly'>
    {/* <th>PAYMENT ID</th> */}
      <th>IMAGE</th>
      <th>TITLE</th>
      <th>PRICE</th>
      <th>CATEGORY</th>
      <th>DATE</th>
      <th>ACTION</th>
     
    </tr>
  </thead>
  <tbody>
    
    <tr className='flex  justify-evenly'>
      {/* <td>1</td> */}
      <td>image1</td>
      <td>fontawesome</td>
      <td>1200</td>
      <td>images</td>
      <td>boatimage</td>
      <td className='flex gap-3'>
      <CreateIcon/>
      <DeleteIcon/>
      </td>
      
    </tr>
    
  </tbody>
</table>
    </TabPanel>
  </Tabs>
     </div>

</div>   
      </Layout> 
    </>
  )
}

export default Dashboard
