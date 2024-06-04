import './ToolPanel.css'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { ArrowTopRightIcon, BoxIcon, HamburgerMenuIcon, ValueIcon, VercelLogoIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'
import { FC } from 'react'

import { CIRCLE, RECT, RING } from '../../../constants/const'

type ToolPanelProps = {
  className?: string
  // eslint-disable-next-line no-unused-vars
  onClickSquare: (type: string) => void
  onClickPointer: () => void
}

const ToolPanel: FC<ToolPanelProps> = ({ className, onClickSquare, onClickPointer }) => {
  return (
    <div className={clsx(className && className, 'ToolContainer')}>
      <button className="IconButton" onClick={onClickPointer}>
        <ArrowTopRightIcon />
      </button>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className="IconButton" aria-label="Customise options">
            <HamburgerMenuIcon />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className="DropdownMenuContent">
            <DropdownMenu.Item className="DropdownMenuItem" onClick={() => onClickSquare(CIRCLE)}>
              <ValueIcon />
            </DropdownMenu.Item>
            <DropdownMenu.Item className="DropdownMenuItem" onClick={() => onClickSquare(RECT)}>
              <BoxIcon />
            </DropdownMenu.Item>
            <DropdownMenu.Item className="DropdownMenuItem" onClick={() => onClickSquare(RING)}>
              <VercelLogoIcon />
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  )
}

export default ToolPanel
