import { buildProps, booleanProp, sizeProp, eventProp } from '@vexip-ui/config'

import type { PropType, ExtractPropTypes } from 'vue'
import type { ConfigurableProps } from '@vexip-ui/config'
import type { TagType } from './symbol'

export const tagProps = buildProps({
  size: sizeProp,
  type: String as PropType<TagType>,
  border: booleanProp,
  closable: booleanProp,
  color: String,
  simple: booleanProp,
  circle: booleanProp,
  onClose: eventProp()
})

export type TagProps = ExtractPropTypes<typeof tagProps>
export type TagCProps = ConfigurableProps<TagProps>