import { Stack } from '@/components'
import { BlockInsight, BlockRevenues, TrafficChannel } from '@/webui'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="p-6">
      <div>
        {/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"> */}
        <p className="flex w-full justify-center py-6">
          Web components
        </p>
      </div>

      <div className="mb-6 grid2">
        <BlockRevenues />
        <TrafficChannel />
      </div>

      <div className="mb-6 grid3">
        <BlockInsight />
      </div>

    </main>
  )
}
