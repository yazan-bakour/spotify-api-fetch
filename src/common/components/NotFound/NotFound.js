import image from "../../../assets/images/not-found.png"
import './NotFound.scss'

export default function NotFound() {
  
  return (
    <div className="notfound">
        <img src={image} alt="" />
      <p>Sorry this page not created yet</p>
    </div>
  )
}
