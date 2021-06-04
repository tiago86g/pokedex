import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Modal } from '../pages/_app'

type ModalProps = {
  modal: Modal
  setModal: () => void
}

export const ModalInfo:React.FC<ModalProps> = ({modal, setModal}) => {
  return (  
    <div className={ modal === Modal.show ? 'absolute w-full h-full z-30  flex justify-center bg-gray-800 bg-opacity-70 transition ease-out duration-500' : 'hidden' }>
      <div className={'p-4 pt-8 w-72 h-32 fixed top-1/3 bg-white rounded-md'}>
        <p className={'text-lg font-light text-center'}>{'Click on + to add up to 3 pokemons to your team'}</p>
        <button name={'close'} className={'absolute -top-5 -right-5 rounded-full w-10 h-10 bg-gray-300 hover:bg-red-200 transition ease-out duration-500'}
          onClick={()=>setModal()}>
          <AiOutlineClose className={'w-6 h-6 ml-2 fill-current text-gray-600'} />
        </button>
      </div>
    </div>
  )
}
