import './ToolPanel.css'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { ArrowTopRightIcon, BoxIcon, HamburgerMenuIcon, ValueIcon, VercelLogoIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'
import { FC } from 'react'

type ToolPanelProps = {
  className?: string
}

const ToolPanel: FC<ToolPanelProps> = ({ className }) => {
  return (
    <div className={clsx(className && className, 'ToolContainer')}>
      <button className="IconButton">
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
            <DropdownMenu.Item className="DropdownMenuItem">
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
