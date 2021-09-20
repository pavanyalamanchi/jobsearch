import { InputGroup, FormControl } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//import CompanyDetail from '../components/ComapnyDetail'
import { withRouter } from "react-router-dom";
import { addToFavourite } from "../actions";
import {RiShieldStarLine} from 'react-icons/ri'

const SearchPage = (props) => {
  const [jobs, setJobs] = useState();
  const [search, setSearch] = useState("");

  const favs = useSelector((s) => s);
  const dispatch = useDispatch();

  const fetchJobs = async () => {
    try {
      const response = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs"
      );
      if (response.ok) {
        let resp = await response.json();
        console.log(resp.data);
        setJobs(resp.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center">
        <h1>JobHunt</h1>
      </div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter desired position"
          aria-label="Enter desired position"
          aria-describedby="basic-addon2"
          onChange={(e) => {
            //console.log(e.target.value)
            setSearch(e.target.value);
          }}
        />
      </InputGroup>
      <div>
        <h3
          onClick={() => {
            props.history.push("/favourites");
          }}
        >
          Favourites
        </h3>
      </div>
      <div>
        {jobs &&
          search &&
          jobs.map((job) => {
            return job.title.toLowerCase().includes(search) ? (
              <div className="d-flex justify-content-around">
                <h3
                  key={job._id}
                  className="d-flex col-6"
                  style={{ justifyContent: "space-evenly" }}
                  onClick={() => {
                    props.history.push("/company-detail");
                    props.setCompanyName(job.company_name);
                  }}
                >
                  {job.company_name}
                </h3>
                {/* <ListGroup as="ul">
                  <ListGroup.Item as="li">
                  {job.company_name}
                  </ListGroup.Item>
                </ListGroup> */}
                <RiShieldStarLine
                  style={{marginTop:'8pt'}}
                  onClick={() => dispatch(addToFavourite(job.company_name))}
                >
                  Add as favourite
                </RiShieldStarLine>
              </div>
            ) : (
              <></>
            );
          })}
      </div>
      {console.log(favs)}
    </>
  );
};

export default withRouter(SearchPage);
