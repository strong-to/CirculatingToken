import ConferenceRoomContent from '@/components/ConferenceRoom/ConferenceRoomContent'
import Header from '@/components/Header/Header'
import ImagePreloader from '@/components/ImagePreloader'

export default function ProjectConstruction() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* 图片预加载组件 - 在页面加载时预加载 ProjectConstruction 图片 */}
      {/* <ImagePreloader /> */}
      
      {/* Title 盒子 - 固定高度 72px */}
      <div>
        <Header />
      </div>
      
      {/* 中间内容盒子 - 占满剩余空间 */}
      <ConferenceRoomContent />
    </div>
  )
}
