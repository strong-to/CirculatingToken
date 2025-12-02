import { useState, useRef, useEffect } from 'react'

interface UseCarouselDragOptions {
  itemCount: number // 卡片数量
  getItemWidth: () => number // 获取每个卡片宽度的函数
  enableSnap?: boolean // 是否启用齿轮对齐，默认true
  snapDuration?: number // 对齐动画时长，默认300ms
  dragThreshold?: number // 拖拽阈值，默认10px
}

interface UseCarouselDragReturn {
  translateX: number
  isDragging: boolean
  isAligning: boolean
  hasMoved: boolean
  carouselRef: React.RefObject<HTMLDivElement>
  handleMouseDown: (e: React.MouseEvent) => void
  handleMouseUp: (e: React.MouseEvent) => void
}

export function useCarouselDrag({
  itemCount,
  getItemWidth,
  enableSnap = true,
  snapDuration = 300,
  dragThreshold = 10,
}: UseCarouselDragOptions): UseCarouselDragReturn {
  const [translateX, setTranslateX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [currentTranslate, setCurrentTranslate] = useState(0)
  const [hasMoved, setHasMoved] = useState(false)
  const [isAligning, setIsAligning] = useState(false)
  
  const carouselRef = useRef<HTMLDivElement>(null)
  const translateXRef = useRef(0)
  const isDraggingRef = useRef(false)
  const hasMovedRef = useRef(false)
  const dragDirectionRef = useRef<'left' | 'right' | null>(null) // 记录拖拽方向
  
  // 同步状态到 ref
  useEffect(() => {
    translateXRef.current = translateX
    isDraggingRef.current = isDragging
    hasMovedRef.current = hasMoved
  }, [translateX, isDragging, hasMoved])
  
  // 重置拖拽状态
  const resetDragging = () => {
    setIsDragging(false)
    setHasMoved(false)
  }
  
  // 齿轮对齐函数 - 根据移动方向决定展示的卡片
  const snapToNearest = () => {
    const itemWidth = getItemWidth()
    if (itemWidth === 0) {
      resetDragging()
      return
    }
    
    const totalWidth = itemWidth * itemCount
    
    // 计算当前最接近的卡片索引
    const currentTranslateX = translateXRef.current
    let currentIndex = Math.round((-currentTranslateX - totalWidth) / itemWidth)
    
    // 规范化索引到有效范围 [0, itemCount-1]
    currentIndex = ((currentIndex % itemCount) + itemCount) % itemCount
    
    // 根据移动方向决定目标索引
    let targetIndex = currentIndex
    if (dragDirectionRef.current === 'left') {
      // 往左移动：显示更右边的卡片（索引+1）
      targetIndex = (currentIndex + 1) % itemCount
    } else if (dragDirectionRef.current === 'right') {
      // 往右移动：显示更左边的卡片（索引-1）
      targetIndex = (currentIndex - 1 + itemCount) % itemCount
    }
    // 如果没有方向，保持当前位置（targetIndex = currentIndex）
    
    // 计算目标位置
    let targetTranslate = -totalWidth - (targetIndex * itemWidth)
    
    // 如果目标位置超出中间组范围，调整到中间组
    if (targetTranslate < -totalWidth * 2) {
      targetTranslate = targetTranslate + totalWidth
    } else if (targetTranslate > -totalWidth) {
      targetTranslate = targetTranslate - totalWidth
    }
    
    // 平滑对齐
    setIsAligning(true)
    setTranslateX(targetTranslate)
    setCurrentTranslate(targetTranslate)
    
    setTimeout(() => {
      setIsAligning(false)
      resetDragging()
      dragDirectionRef.current = null // 重置方向
    }, snapDuration)
  }
  
  // 拖拽处理
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return
      
      // 检查鼠标按钮状态，如果已经松开，立即重置状态
      if (e.buttons === 0) {
        resetDragging()
        return
      }
      
      const diff = e.clientX - startX
      const moveDistance = Math.abs(diff)
      
      // 只有移动距离超过阈值才真正进入拖拽模式
      if (moveDistance > dragThreshold) {
        if (!hasMovedRef.current) {
          setHasMoved(true)
          e.preventDefault()
        }
      }
      
      // 如果还没有移动足够距离，不更新位置
      if (!hasMovedRef.current) return
      
      // 阻止默认行为
      e.preventDefault()
      e.stopPropagation()
      
      // 根据鼠标移动的diff判断方向（diff > 0 向右，diff < 0 向左）
      // 一旦确定了方向，在整个拖拽过程中保持不变
      if (dragDirectionRef.current === null && Math.abs(diff) > 0) {
        if (diff > 0) {
          dragDirectionRef.current = 'right' // 鼠标向右移动
        } else {
          dragDirectionRef.current = 'left' // 鼠标向左移动
        }
      }
      
      let newTranslate = currentTranslate + diff
      const itemWidth = getItemWidth()
      const totalWidth = itemWidth * itemCount
      
      // 链条循环效果：当滚动超出边界时，无缝重置位置
      if (newTranslate > -totalWidth) {
        newTranslate = newTranslate - totalWidth
        setCurrentTranslate(newTranslate)
        setStartX(e.clientX)
      } else if (newTranslate < -totalWidth * 2) {
        newTranslate = newTranslate + totalWidth
        setCurrentTranslate(newTranslate)
        setStartX(e.clientX)
      }
      
      setTranslateX(newTranslate)
    }
    
    // 全局mouseup处理器
    const handleGlobalMouseUp = (e: MouseEvent) => {
      if (isDraggingRef.current) {
        if (hasMovedRef.current) {
          e.preventDefault()
          e.stopPropagation()
          
          // 如果启用齿轮对齐，进行对齐
          if (enableSnap) {
            snapToNearest()
          } else {
            resetDragging()
            dragDirectionRef.current = null // 重置方向
          }
        } else {
          resetDragging()
          dragDirectionRef.current = null // 重置方向
        }
      }
    }
    
    // 鼠标离开窗口时重置
    const handleMouseLeave = () => {
      if (isDraggingRef.current) {
        resetDragging()
        dragDirectionRef.current = null // 重置方向
      }
    }
    
    // 窗口失去焦点时重置
    const handleBlur = () => {
      if (isDraggingRef.current) {
        resetDragging()
        dragDirectionRef.current = null // 重置方向
      }
    }
    
    // 监听全局事件
    document.addEventListener('mouseup', handleGlobalMouseUp, { capture: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('blur', handleBlur)
    document.addEventListener('mousemove', handleMouseMove, { passive: false })
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleGlobalMouseUp, { capture: true })
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('blur', handleBlur)
    }
  }, [startX, currentTranslate, itemCount, enableSnap, snapDuration, dragThreshold])
  
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX)
    setCurrentTranslate(translateX)
    setHasMoved(false)
    dragDirectionRef.current = null // 重置方向，等待第一次移动时确定
  }
  
  const handleMouseUp = (e: React.MouseEvent) => {
    if (isDragging && hasMoved) {
      if (enableSnap) {
        snapToNearest()
      } else {
        resetDragging()
      }
    } else if (isDragging) {
      resetDragging()
    }
  }
  
  // 初始化位置到中间区域
  useEffect(() => {
    if (!carouselRef.current) return
    
    const updatePosition = () => {
      const itemWidth = getItemWidth()
      if (itemWidth === 0) return
      
      const initialTranslate = -itemCount * itemWidth
      setTranslateX(initialTranslate)
      setCurrentTranslate(initialTranslate)
    }
    
    updatePosition()
    
    // 监听窗口大小变化
    window.addEventListener('resize', updatePosition)
    return () => window.removeEventListener('resize', updatePosition)
  }, [itemCount])
  
  return {
    translateX,
    isDragging,
    isAligning,
    hasMoved,
    carouselRef,
    handleMouseDown,
    handleMouseUp,
  }
}

