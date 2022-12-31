import './index.css'

const HistoryList = props => {
  const {historyListItem, deleteListItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyListItem

  const onDeleteItem = () => {
    deleteListItem(id)
  }

  return (
    <li className="historyListItems">
      <div className="timeContainer">
        <p className="time">{timeAccessed}</p>
        <div className="middle">
          <img className="domainLogo" src={logoUrl} alt="domain logo" />
          <div className="accountDomain">
            <p className="title-name">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
      </div>
      <div className="buttonContainer">
        <button
          testid="delete"
          onClick={onDeleteItem}
          className="deleteButton"
          type="button"
        >
          <img
            className="deleteIcon"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryList
