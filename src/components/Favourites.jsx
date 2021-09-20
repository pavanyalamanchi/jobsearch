import {useSelector} from 'react-redux'
import {withRouter} from 'react-router-dom'
// import {Alert} from 'react-bootstrap'

const Favourites = (props) => {

const favs = useSelector(state => state)

return(
    <>
    {favs.favourites.map(fav => <h3 onClick={() => {
                props.history.push("/company-detail")
                props.setCompanyName(fav)
        }}>{fav}</h3>)}
    </>
)}

export default withRouter(Favourites)