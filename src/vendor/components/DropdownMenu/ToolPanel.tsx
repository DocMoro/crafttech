import './ToolPanel.css'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { ArrowTopRightIcon, BoxIcon, HamburgerMenuIcon, ValueIcon, VercelLogoIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'
import { FC } from 'react'

type ToolPanelProps = {
  className?: string
  onClickSquare: () => void
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
            <DropdownMenu.Item className="DropdownMenuItem">
              <ValueIcon />
            </DropdownMenu.Item>
            <DropdownMenu.Item className="DropdownMenuItem" onClick={onClickSquare}>
              <BoxIcon />
            </DropdownMenu.Item>
            <DropdownMenu.Item className="DropdownMenuItem">
              <VercelLogoIcon />
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  )
}

export default ToolPanel
