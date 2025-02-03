import { useState } from 'react'

import { Checkbox, Stack } from '@chakra-ui/react'

const CheckboxExample = ({ isDisable = false }: { isDisable: boolean }) => {
  const [checkedItems, setCheckedItems] = useState([false, false, false])

  const allChecked = checkedItems.every(Boolean)
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked

  return (
    <>
      <Checkbox
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={(e) =>
          setCheckedItems([
            e.target.checked,
            e.target.checked,
            e.target.checked,
          ])
        }
        isDisabled={isDisable}
      >
        Parent Checkbox
      </Checkbox>
      <Stack pl={6} mt={1} spacing={1}>
        {['Child Checkbox 1', 'Child Checkbox 2', 'Child Checkbox 3'].map(
          (label, index) => (
            <Checkbox
              key={index}
              isDisabled={isDisable}
              isChecked={checkedItems[index]}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCheckedItems((prev) =>
                  prev.map((item, i) =>
                    i === index ? e.target.checked : item,
                  ),
                )
              }
            >
              {label}
            </Checkbox>
          ),
        )}
      </Stack>
    </>
  )
}

export default CheckboxExample
