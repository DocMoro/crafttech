import './App.css'

import { KonvaEventObject } from 'konva/lib/Node'
import { useCallback, useState } from 'react'
import { Layer, Rect, Stage } from 'react-konva'
import { v4 as uuidv4 } from 'uuid'

import { TShapes } from './constants/type'
import ToolPanel from './vendor/components/DropdownMenu/ToolPanel'

const windowInnerWidth = document.documentElement.clientWidth
const windowInnerHeight = document.documentElement.clientHeight - 1

function App() {
  const [activeTools, setActiveTools] = useState(false)
  const [shapes, setShapes] = useState<TShapes[]>([
    {
      x: 0,
      y: 0,
      id: 'Hi!'
    }
  ])

  const handleChangeShapePosition = (e: KonvaEventObject<MouseEvent>) => {
    const shapeId = e.target.attrs.id as string
    setShapes(shapes.map(shape => (shape.id === shapeId ? { ...shape, x: e.target.x(), y: e.target.y() } : shape)))
  }

  const handleSquareClick = useCallback(() => {
    setActiveTools(true)
  }, [])

  const handleStageClick = (e: KonvaEventObject<MouseEvent>) => {
    const pos = e.target.getStage()!.getRelativePointerPosition()
    if (!pos) return
    if (activeTools) {
      setShapes([...shapes, { ...pos, id: uuidv4() }])
    }
  }

  const handleClickPointer = () => {
    setActiveTools(false)
  }

  return (
    <>
      <div className="stage">
        <ToolPanel className="toolPosition" onClickSquare={handleSquareClick} onClickPointer={handleClickPointer} />
        <Stage draggable={!activeTools} width={windowInnerWidth} height={windowInnerHeight} onClick={handleStageClick}>
          <Layer>
            {shapes.map(shape => (
              <Rect
                key={shape.id}
                {...shape}
                draggable={!activeTools}
                fill="red"
                width={100}
                height={100}
                onDragEnd={handleChangeShapePosition}
              />
            ))}
          </Layer>
        </Stage>
      </div>
    </>
  )
}

export default App
