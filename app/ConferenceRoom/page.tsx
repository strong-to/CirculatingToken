import Header from '@/components/Header/Header'
import ConferenceRoomContent from '@/components/ConferenceRoom/ConferenceRoomContent'

export default function ConferenceRoom() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Title 盒子 - 固定高度 72px */}
      <div>
        <Header />
      </div>
      
      {/* 中间内容盒子 - 占满剩余空间 */}
      <ConferenceRoomContent />
    </div>
  )
}

