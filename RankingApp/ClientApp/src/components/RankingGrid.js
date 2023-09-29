const RankingGrid = ({ items, imgArr }) => {
  const RankingGrid = []
  const cellCollectionTop = []
  const cellCollectionBottom = []
  const cellCollectionMiddle = []
  const cellCollectionWorst = []

  function createCellsForRow(row) {
    let rankNum = 0
    let currCollection = []
    let label = ''
    const numCells = 5

    for (let cell = 1; cell <= numCells; cell++) {
      rankNum = cell === 1 ? 0 : (row - 1) * numCells + cell - rankNum

      switch (row) {
        case 1:
          currCollection = cellCollectionTop
          label = 'Top Tier'
          break
        case 2:
          currCollection = cellCollectionMiddle
          label = 'Middle Tier'
          break
        case 3:
          currCollection = cellCollectionBottom
          label = 'Bottom Tier'
          break

        case 4:
          currCollection = cellCollectionWorst
          label = 'Worst Tier'
          break
        default:
          currCollection = []
          label = ''
      }

      pushCellMarkupToArr(currCollection, rankNum, label)
    }
  }

  function pushCellMarkupToArr(cellCollection, rankNum, rowLabel) {
    if (rankNum > 0) {
      let item = items.find((o) => o.rank === rankNum)
      cellCollection.push(
        <div id={`rank-${rankNum}`} className='rank-cell'></div>
      )
    } else {
      cellCollection.push(
        <div className='row-label'>
          <h4>{rowLabel}</h4>
        </div>
      )
    }
  }

  function createCellsForRows() {
    // create cells for each row in the grid
    const maxRow = 4
    for (let row = 1; row <= maxRow; row++) {
      createCellsForRow(row)
    }
  }

  function createRowsForGrid() {
    RankingGrid.push(
      <div className='rank-row top-tier'>{cellCollectionTop}</div>
    )
    RankingGrid.push(
      <div className='rank-row middle-tier'>{cellCollectionMiddle}</div>
    )
    RankingGrid.push(
      <div className='rank-row bottom-tier'>{cellCollectionBottom}</div>
    )
    RankingGrid.push(
      <div className='rank-roaw worst-tier'>{cellCollectionWorst}</div>
    )

    return RankingGrid
  }

  function createRankingGrid() {
    createCellsForRows()
    return createRowsForGrid()
  }

  return createRankingGrid()
}

export default RankingGrid
