import { useEffect } from 'react'
import styled from 'styled-components'
import { ModalBody, ModalContainer, Message, ModalHeader, Box, Heading } from '@pancakeswap/uikit'
import useTheme from 'hooks/useTheme'
import { useTranslation } from 'contexts/Localization'
import { WrappedTokenInfo } from 'state/types'
// import SwapWarningTokensConfig from 'config/constants/swapWarningTokens'
import SafemoonWarning from './SafemoonWarning'
import ItamWarning from './ItamWarning'
import BondlyWarning from './BondlyWarning'
import Acknowledgement from './Acknowledgement'
import CcarWarning from './CcarWarning'
import BTTWarning from './BTTWarning'

const StyledModalContainer = styled(ModalContainer)`
  max-width: 440px;
`

const MessageContainer = styled(Message)`
  align-items: flex-start;
  justify-content: flex-start;
`

interface SwapWarningModalProps {
  swapCurrency: WrappedTokenInfo
  onDismiss?: () => void
}

// Modal is fired by a useEffect and doesn't respond to closeOnOverlayClick prop being set to false
const usePreventModalOverlayClick = () => {
  useEffect(() => {
    const preventClickHandler = (e) => {
      e.stopPropagation()
      e.preventDefault()
      return false
    }

    document.querySelectorAll('[role="presentation"]').forEach((el) => {
      el.addEventListener('click', preventClickHandler, true)
    })

    return () => {
      document.querySelectorAll('[role="presentation"]').forEach((el) => {
        el.removeEventListener('click', preventClickHandler, true)
      })
    }
  }, [])
}

const SwapWarningModal: React.FC<SwapWarningModalProps> = ({ swapCurrency, onDismiss }) => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  usePreventModalOverlayClick()
  /* 
  const TOKEN_WARNINGS = {
    [SwapWarningTokensConfig.safemoon.address]: {
      symbol: SwapWarningTokensConfig.safemoon.symbol,
      component: <SafemoonWarning />,
    },
    [SwapWarningTokensConfig.bondly.address]: {
      symbol: SwapWarningTokensConfig.bondly.symbol,
      component: <BondlyWarning />,
    },
    [SwapWarningTokensConfig.itam.address]: {
      symbol: SwapWarningTokensConfig.itam.symbol,
      component: <ItamWarning />,
    },
    [SwapWarningTokensConfig.ccar.address]: {
      symbol: SwapWarningTokensConfig.ccar.symbol,
      component: <CcarWarning />,
    },
    [SwapWarningTokensConfig.bttold.address]: {
      symbol: SwapWarningTokensConfig.bttold.symbol,
      component: <BTTWarning />,
    },
  } */

  // const SWAP_WARNING = TOKEN_WARNINGS[swapCurrency.address]

  return (
    <StyledModalContainer minWidth="280px">
      <ModalHeader background={theme.colors.gradients.cardHeader} />
      <ModalBody p="24px">
        <MessageContainer variant="warning" mb="24px" />
        <Acknowledgement handleContinueClick={onDismiss} />
      </ModalBody>
    </StyledModalContainer>
  )
}

export default SwapWarningModal
