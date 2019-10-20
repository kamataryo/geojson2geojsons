const readline = require('readline')
const rl = readline.createInterface(process.stdin, {})

const geojsonstr = []

rl.on('line', line => geojsonstr.push(line))

rl.on('close', () => {
  const geojson = JSON.parse(geojsonstr.join(''))
  geojson.type === 'FeatureCollection'
    ? geojson.features.forEach(feature =>
      process.stdout.write(JSON.stringify(feature) + '\n')
    )
    : process.stdout.write('\n')
})
