const d = new Map()
  .set('FOOTBALL_SPORTS', {
    eng: 'football sports'
  })
  .set('ADVENTURE_SPORTS', {
    eng: 'adventure sports'
  })
  .set('AIR_SPORTS', {
    eng: 'air sports'
  })
  .set('BOWLING_SPORTS', {
    eng: 'bowling sports'
  })
  .set('BEACH_SPORTS', {
    eng: 'beach sports'
  })
  .set('WEIGHT_LIFTING_SPORTS', {
    eng: 'weight lifting sports'
  })
  .set('GOLF_SPORTS', {
    eng: 'golf sports'
  })
  .set('DISABLED_SPORTS', {
    eng: 'disabled sports'
  })
  .set('ROLLER_SPORTS', {
    eng: 'roller sports'
  })
  .set('RACKET_SPORTS', {
    eng: 'racket sports'
  })
  .set('HOCKEY_SPORTS', {
    eng: 'hockey sports'
  })
  .set('PADDLING_SPORTS', {
    eng: 'paddling sports'
  })
  .set('HORSE_SPORTS', {
    eng: 'horse sports'
  })
  .set('DOG_SPORTS', {
    eng: 'dog sports'
  })
  .set('MULTI_SPORTS', {
    eng: 'multi sports'
  })
  .set('HYBRID_SPORTS', {
    eng: 'hybrid sports'
  })
  .set('SHOOTING_SPORTS', {
    eng: 'shooting sports'
  })
  .set('UNDERWATER_SPORTS', {
    eng: 'underwater sports'
  })
  .set('WRESTLING_SPORTS', {
    eng: 'wrestling sports'
  })
  .set('MARTIAL_ARTS', {
    eng: 'martial arts'
  })
  .set('MOTORCYCLE_SPORTS', {
    eng: 'motorcycle sports'
  })
  .set('MIND_SPORTS', {
    eng: 'mind sports'
  })
  .set('OTHER_SPORTS', {
    eng: 'other sports'
  })

function keyToValue (key) {
  return d.get(key)
}

function valueToKey (value) {
  for (const [k, v] of d.entries()) {
    if (v.eng === value) return k
  }

  throw Error('value is invali...')
}

function getDefaultKeyForCategory () {
  return 'OTHER_SPORTS'
}

export {
  keyToValue,
  valueToKey,
  getDefaultKeyForCategory
}
