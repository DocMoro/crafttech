import './App.css'

import { Layer, Rect, Stage } from 'react-konva'

function App() {
  return (
    <>
      <Stage width={window.innerWidth} height={window.innerHeight} className="stage">
        <Layer>
          <Rect draggable fill="red" width={100} height={100} />
        </Layer>
      </Stage>
    </>
  )
}

export default App
