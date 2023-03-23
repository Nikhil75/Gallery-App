import './index.css'

const ThumbnailItem = props => {
  const {imagesList, onclickChangeImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imagesList

  const isButtonActive = isActive ? 'revealColor' : ' '

  const changeImage = () => {
    onclickChangeImage(id)
  }

  return (
    <li className="tabs-list-container">
      <button className="tab-image-buttons" type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={isButtonActive}
          onClick={changeImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
