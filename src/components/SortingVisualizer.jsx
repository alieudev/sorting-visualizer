import "./sortingvisualizer.css"
function SortingVisualizer(){
    const sortingNums = []

    for (let i =0; i<140; i++){
        sortingNums.push(Math.floor((Math.random() * 600)+ 10))
    }
    return(
        <div className='array-container'>
            {sortingNums.map((num, idx) => {
                return(<div className='array-bar' 
                key={idx}
                style={{height:`${num}px`, 
                backgroundColor:'#ffe5d9' }}>
                </div>)
            })}
        </div>
    )
}

export default SortingVisualizer;