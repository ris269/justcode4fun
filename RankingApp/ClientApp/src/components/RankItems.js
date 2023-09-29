import React, { useState, useEffect } from 'react'
import MovieImages from './MovieImages'
import RankingGrid from './RankingGrid'

const RankItems = () => {
  const [items, setItems] = useState([])
  const dataType = 1

  useEffect(() => {
    fetch(`item/${dataType}`)
      .then((results) => {
        return results.json()
      })
      .then((data) => {
        setItems(data)
      })
  }, [])

  return (
    <main>
      <RankingGrid items={items} imgArr={MovieImages} />
      <div className='items-not-ranked'>
        {items.length > 0 ? (
          items.map((item) => (
            <div className='unranked-cell'>
              <img
                key={`item-${item.id}`}
                src={MovieImages.find((o) => o.id === item.imageId)?.image}
                alt={item.name}
              />
            </div>
          ))
        ) : (
          <div>Loading ...</div>
        )}
      </div>
    </main>
  )
}

export default RankItems
