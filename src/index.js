const {heavenlyStems, earthlyBranch, placeDayMap, placeTimeMap} = require('./static')

/**
 * 公元纪年转干支纪年
 * @param 公元纪年年份 year 
 * @returns [干支纪年年份]
 */
function translateYear(year) {
  const h = heavenlyStems[(year - 3) % 10]
  const e = earthlyBranch[(year - 3) % 12]
  console.log(`农历${h}${e}年，`)
  return [h, e]
}

/**
 * 公元纪日转干支纪日
 * @param  
 * @param {*} day 
 */
function translateDay(year, month, day) {
  const C = parseInt(year / 100)
  const Y = year % 100
  const M = month + 1
  const D = day
  const I = month % 2 == 0 ? 6 : 0

  const g = heavenlyStems[parseInt((4 * C + (C / 4) + 5 * Y + (Y / 4) + (3 * M / 5) + D - 3)) % 10]
  const z = earthlyBranch[parseInt((8 * C + (C / 4) + 5 * Y + (3 * M / 5) + D + 7 + I)) % 10]

  console.log(`${g}日${z}时`)
  return [g, z]
}

function findIt(year, mouth, day) {
  const [h, e] = translateYear(year)
  const [g, z] = translateDay(year, mouth, day)
  console.log(placeDayMap[g], placeTimeMap[z])
}

module.exports = {
  findIt
}