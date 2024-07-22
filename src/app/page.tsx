import { Text } from "@/components";
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
} from "@/webui";
import { Header } from "@/webui/Header/Header";
import { YouPay } from "@/webui/YouPay/YouPay";

export default function Home() {
  return (
    <>
      <Header />
      <main className="px-6 py-2">
        <div className="mb-6 grid2">
          <BlockRevenues />
          <TrafficChannel />
          <PaymentHistory />
          <SalesByTime />
          <EmergencyFounds />
          <BlockInsight />
          <LiveOpportunities />
          <Notifications />
          <Messages />
          <YouPay />
        </div>
      </main>
    </>
  );
}
