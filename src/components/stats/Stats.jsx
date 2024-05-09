import PropTypes from 'prop-types';

const Stats = ({items}) => {

    if(!items) {
        return (
            <p className="stats">
                <em>Start adding some items to your packing list 🚀</em>
            </p>
        )
    }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const numPackedPercent = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats"> 
        <em>
            {numPackedPercent === 100 ? 'You got everything! Ready to go ✈️' : 
            `🧳 You have ${numItems} items on your list, add you already packed ${numPacked} 
            (${numPackedPercent}%)`
            }
        </em> 
    </footer>
  )
}
Stats.propTypes = {
    items: PropTypes.array.isRequired,
}
export default Stats;