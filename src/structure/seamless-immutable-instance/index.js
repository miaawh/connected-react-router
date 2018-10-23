import Immutable from 'seamless-immutable'
import getIn from '../plain/getIn'
import setIn from '../plain/setIn'

const structure = {
  filterNotRouter: state => {
    const { router, ...rest } = state // eslint-disable-line
    return rest
  },
  fromJS: value => Immutable.from(value),
  getIn,
  merge: (state, payload) => Immutable.merge(state, payload),
  setIn: (state, field, value) => Immutable.from(setIn(state, field, value)),
  toJS: value => Immutable.asMutable(value)
}

export default structure
