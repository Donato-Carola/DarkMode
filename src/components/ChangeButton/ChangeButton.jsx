import PropTypes from "prop-types"

const ChangeButton = ({toggleTheme, isDarkMode}) => {
  return (
    <>
    <div className="w-100 flex items-center justify-center">
      <button  onClick={toggleTheme} className={`btn ${isDarkMode ? "btn-light" : "btn-info"} mb-4 mt-4 uppercase text-black`}
      > Cambia </button>
      </div>
      
    </>
  )
}

export default ChangeButton;



ChangeButton.propTypes ={
  toggleTheme: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool
}
