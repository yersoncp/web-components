import {
  BlockInsight,
  BlockRevenues,
  EmergencyFounds,
  LiveOpportunities,
  Messages,
  Notifications,
  PaymentHistory,
  SalesByTime,
  TrafficChannel,
} from '@/webui'
import { Header } from '@/webui/Header/Header'
import { YouPay } from '@/webui/YouPay/YouPay'

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-6 container">
        <div className="mb-6 grid2">
          <BlockRevenues />
          <TrafficChannel />
          <PaymentHistory />
          <SalesByTime />
        </div>

        <div className="mb-6 grid3">
          <EmergencyFounds />
          <BlockInsight />
          <LiveOpportunities />
          <Notifications />
          <Messages />
          <YouPay />
        </div>
      </main>
    </>
  )
}
