import './BoardWithShapes.css'

import { KonvaEventObject } from 'konva/lib/Node'
import { useCallback, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { RECT } from '../../constants/const'
import { TShape } from '../../constants/type'
import BoardWithShapesContainer from './BoardWithShapesContainer'

const BoardWithShapes = () => {
  const [activeTool, setActiveTool] = useState('')
  const [shapes, setShapes] = useState<TShape[]>([
    {
      type: RECT,
      x: 0,
      y: 0,
      id: 'Hi!'
    }
  ])

  const handleChangeShapePosition = useCallback(
    (e: KonvaEventObject<MouseEvent>) => {
      const shapeId = e.target.attrs.id as string
      setShapes(shapes.map(shape => (shape.id === shapeId ? { ...shape, x: e.target.x(), y: e.target.y() } : shape)))
    },
    [shapes]
  )

  const handleToolClick = useCallback((type: string) => {
    setActiveTool(type)
  }, [])

  const handleStageClick = useCallback(
    (e: KonvaEventObject<MouseEvent>) => {
      const pos = e.target.getStage()!.getRelativePointerPosition()
      if (!pos) return
      if (activeTool) {
        setShapes([...shapes, { ...pos, type: activeTool, id: uuidv4() }])
      }
    },
    [activeTool, shapes]
  )

  const handlePointerClick = useCallback(() => {
    setActiveTool('')
  }, [])

  return (
    <BoardWithShapesContainer
      shapes={shapes}
      activeTool={activeTool}
      handleChangeShapePosition={handleChangeShapePosition}
      handleToolClick={handleToolClick}
      handleStageClick={handleStageClick}
      handlePointerClick={handlePointerClick}
    />
  )
}

export default BoardWithShapes
