import CountBox from '../@Layout/CountBox'
import Section from '../@Layout/Section'
import { useCountContext } from './storage/state'

const Local = () => {
  const count = useCountContext((store) => store.count)
  const set = useCountContext((store) => store.set)
  const reset = useCountContext((store) => store.reset)

  return (
    <Section title={'Count Provider'}>
      <CountBox
        count={count}
        onReset={() => reset('count')}
        onDecrease={() => set('count', (prev) => prev - 1)}
        onIncrease={() => set('count', (prev) => prev + 1)}
      />
    </Section>
  )
}

export default Local
