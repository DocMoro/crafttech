import './App.css'

import { Layer, Rect, Stage } from 'react-konva'

import DropdownMenuDemo from './vendor/components/DropdownMenu/DropdownMenu'

function App() {
  return (
    <>
      <div>
        <DropdownMenuDemo className="dropPosition" />
        <Stage draggable width={window.innerWidth} height={window.innerHeight} className="stage">
          <Layer>
            <Rect draggable fill="red" width={100} height={100} />
          </Layer>
        </Stage>
      </div>
    </>
  )
}

export default App
