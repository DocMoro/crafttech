import './App.css'

import { Layer, Rect, Stage } from 'react-konva'

import ToolPanel from './vendor/components/DropdownMenu/ToolPanel'

const windowInnerWidth = document.documentElement.clientWidth
const windowInnerHeight = document.documentElement.clientHeight - 1

function App() {
  return (
    <>
      <div className="stage">
        <ToolPanel className="toolPosition" />
        <Stage draggable width={windowInnerWidth} height={windowInnerHeight}>
          <Layer>
            <Rect draggable fill="red" width={100} height={100} />
          </Layer>
        </Stage>
      </div>
    </>
  )
}

export default App
