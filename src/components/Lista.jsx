import React from 'react'
import PropTypes from 'prop-types';
import { ElementoLista } from './ElementoLista';

export const Lista = ({ data }) => {
  return (
    <ul className="list-group my-2">
        {
            data.map((item, index) => {
                return <ElementoLista text={item} key={index} />
            })
        }
    </ul>
  )
}

Lista.defaultProps = {
    data: ['Javascript', 'VbScript']
}

Lista.propTypes = {
    data: PropTypes.array.isRequired
}