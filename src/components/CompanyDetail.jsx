/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react'

const CompanyDetail = (props) => {

const [company, setCompany] = useState()

    const fetchCompanies = async () => {
        try {
            const response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?company=${props.companyName}`)
            if(response.ok){
                let resp = await response.json()
                //console.log(resp.data)
                setCompany(resp.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        fetchCompanies()
    },[])

    return(
<>
<div className='mt-5 mb-5 d-block ' style={{textAlign:'center'}}>
   <h1>{props.companyName}</h1> 
   <h3>Jobs Available</h3>
</div>
{company && company.map((com) => {
    return <h5 className='d-flex justify-content-center' key={com._id}>{com.title}</h5>
})}
</>
    )
}

export default CompanyDetail